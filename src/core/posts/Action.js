import { requestActionFactory } from '@core/apiRequest'

const createAction = requestActionFactory('POSTS')

export const fetchPosts = createAction(
  'FETCH_POSTS',
  () => ({ url: '/posts' }),
  () => ({ cache: 10 })
)

export const updatePost = createAction(
  'UPDATE_POST',
  ({ id, title, body }) => ({
    url: `/posts/${id}`,
    method: 'PATCH',
    data: { id, title, body }
  }),
  ({ id }) => ({
    mutations: {
      [fetchPosts.type]: (data, mutationData) => data.map(post => post.id === mutationData.id ? mutationData : post)
    },
    requestKey: id
  })
)

export const deletePost = createAction(
  'DELETE_POST',
  ({ id }) => ({
    url: `/posts/${id}`,
    method: 'DELETE'
  }),
  (postItem) => ({
    mutations: {
      [fetchPosts.type]: {
        updateDataOptimistic: data => data.filter(post => post.id !== postItem.id),
        revertData: data => [postItem, ...data]
      }
    },
    requestKey: postItem.id
  })
)

export default {
  fetchPosts,
  updatePost,
  deletePost
}