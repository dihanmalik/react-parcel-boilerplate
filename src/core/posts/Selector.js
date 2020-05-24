import { getQuerySelector, getMutationSelector } from '@redux-requests/core'
import { fetchPosts, updatePost, deletePost } from './Action'

export const postsSelector = getQuerySelector({ type: fetchPosts.type, multiple: true })

export const updatePostMutationSelector = (state, postId) => getMutationSelector({ type: `${updatePost.type}${postId}` })(state)
export const deletePostMutationSelector = (state, postId) => getMutationSelector({ type: `${deletePost.type}${postId}` })(state)