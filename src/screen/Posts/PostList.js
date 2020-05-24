import React from 'react'
import { connect } from 'react-redux'
import { postsSelector } from '@core/posts/Selector'
import { fetchPosts } from '@core/posts/Action'
import { Loader } from 'react-feather'

import Button from '@atom/Button'
import PostItem from "./PostItem"

const PostList = ({ posts, fetchPosts }) => {
  return (
    <div className="c-postlist">
      <Button
        onClick={fetchPosts}
        label={`${posts.loading ? 'Fetching posts...' : 'Fetch posts'}`}
        iconLoader={posts.loading ? <Loader size={18} /> : null}
      />
      {posts.data.slice(0, 10).map(post => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  )
}

export default connect(
  state => ({
    posts: postsSelector(state)
  }),
  {
    fetchPosts: fetchPosts.request
  }
)(PostList)
