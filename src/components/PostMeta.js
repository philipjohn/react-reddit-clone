import React from 'react'
import PropTypes from 'prop-types'
import RelTime from './RelTime'
import CommentsCount from './CommentsCount'
import PostActionLinks from './PostActionLinks'

const PostMeta = ({ post }) => {
	return (
		<div className="post-meta">
			<p>
				<RelTime publishedTime={ post.published } />
			</p>
			<p>
				<CommentsCount count={ post.comments } />
				<PostActionLinks id={ post.id } />
			</p>
		</div>
	)
}

PostMeta.propTypes = {
	post: PropTypes.object.isRequired
}

export default PostMeta