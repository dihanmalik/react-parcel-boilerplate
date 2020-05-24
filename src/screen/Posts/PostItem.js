import React, { useState, useMemo } from 'react'
import { Loader, Trash2, XCircle } from 'react-feather'
import { connect } from 'react-redux'

import { updatePost, deletePost } from '@core/posts/Action'
import { updatePostMutationSelector, deletePostMutationSelector } from '@core/posts/Selector'

import Button from '@atom/Button'

const PostItem = ({
  id,
  title,
  body,
  updatePost,
  cancelUpdatePost,
  updateNetwork,
  deletePost,
  cancelDeletePost,
  deleteNetwork
}) => {

  const [editable, setEditable] = useState(false)
  const [titleInput, setTitle] = useState(title)
  const [bodyInput, setBody] = useState(body)

  const hasChanged = useMemo(() => {
    return title !== titleInput || body !== bodyInput
  }, [titleInput, bodyInput])

  const revertState = () => {
    setTitle(title)
    setBody(body)
  }

  const onCancelUpdate = () => {
    if (updateNetwork.loading) {
      cancelUpdatePost({ requestKey: id })
    }
    setEditable(!editable)
    revertState()
  }

  const onDeleteItem = () => deletePost({ id, title, body })

  const onCancelDelete = () => cancelDeletePost({ requestKey: id })

  const onChangeTitle = ({ target }) => setTitle(target.value)

  const onChangeBody = ({ target }) => setBody(target.value)

  const onUpdatePost = () => {
    if (hasChanged && !updateNetwork.loading) {
      updatePost({ id, title: titleInput, body: bodyInput }).then(({ data }) => {
        if (!!data) setEditable(false)
      })
    }
  }

  return (
    <div className="c-postlist__item" key={id}>
      {editable ? (
        <>
          <input
            className="c-postlist__title-input"
            name="title" value={titleInput}
            onChange={onChangeTitle}
            disabled={updateNetwork.loading}
          />
          <div>
            <textarea
              className="c-postlist__body-input"
              name="body" value={bodyInput}
              onChange={onChangeBody}
              disabled={updateNetwork.loading}
            >
              {bodyInput}
            </textarea>
          </div>
        </>
      ) : (
          <>
            <div className="c-postlist__title">{title}</div>
            <div className="c-postlist__body">{body}</div>
          </>
        )}

      <div className="c-postlist__action-container">
        {!deleteNetwork.loading && !editable && !updateNetwork.loading && (
          <Button
            onClick={() => setEditable(true)}
            label="Edit"
            outlined
          />
        )}

        {updateNetwork.loading && (
          <Button
            label="Cancel update"
            icon={<XCircle size={18} />}
            outlined
            className="error__button"
            onClick={onCancelUpdate}
          />
        )}

        {deleteNetwork.loading && (
          <Button
            label="Cancel delete"
            icon={<XCircle size={18} />}
            outlined
            className="error__button"
            onClick={onCancelDelete}
          />
        )}

        {editable && !updateNetwork.loading && (
          <Button
            label="Cancel"
            icon={<XCircle size={18} />}
            outlined
            className="error__button"
            onClick={() => {
              setEditable(false)
              revertState()
            }}
          />
        )}

        {!updateNetwork.laoding && !editable && (
          <Button
            icon={!deleteNetwork.loading ? <Trash2 size={18} /> : null}
            label={deleteNetwork.loading ? 'Deleting post' : ''}
            iconLoader={deleteNetwork.loading ? <Loader size={18} /> : null}
            outlined
            className="error__button"
            onClick={!deleteNetwork.loading ? onDeleteItem : null}
          />
        )}

        {editable || updateNetwork.loading ? (
          <Button
            outlined
            label={`Apply${updateNetwork.loading ? 'ing' : ''} Changes`}
            iconLoader={updateNetwork.loading ? <Loader size={18} /> : null}
            onClick={onUpdatePost}
          />
        ) : null}
      </div>
    </div>
  )
}

const enhancer = connect(
  (state, ownProps) => ({
    updateNetwork: updatePostMutationSelector(state, ownProps.id),
    deleteNetwork: deletePostMutationSelector(state, ownProps.id)
  }),
  {
    updatePost: updatePost.request,
    cancelUpdatePost: updatePost.cancel,
    deletePost: deletePost.request,
    cancelDeletePost: deletePost.cancel
  }
)

export default enhancer(PostItem)
