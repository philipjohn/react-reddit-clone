import React from 'react'
import Post from './Post'
import RedditStore from './RedditStore'

const PostList = () => (
	<RedditStore.Consumer>
		{ posts =>
			<ul className="post-list">
				{ posts.map(post => (
					<li key={ post.id } className="post">
						<Post post={ post } />
					</li>
				)) }
			</ul>
		}
	</RedditStore.Consumer>
)

export default PostList