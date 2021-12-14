import React, { useContext } from 'react'
import Post from './Post'
import { RedditContext } from './RedditStore'

const PostList = () => {
	const { posts } = useContext(RedditContext)
	return (
		<ul className="post-list">
			{ posts.map(post => (
				<li key={ post.id } className="post">
					<Post post={ post } />
				</li>
			)) }
		</ul>
	)
}

export default PostList