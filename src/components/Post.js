import React from 'react'
import PropTypes from 'prop-types'
import VotingControls from './VotingControls'
import PostMeta from './PostMeta';

const Post = ({ post }) => {
	const parse_url = new URL(post.url);
	return (
		<>
			<VotingControls
				voteCount={ post.votes }
				id={ post.id }
			/>
			<div className="post-image">
				<img src={ post.image } alt="foobar" />
			</div>
			<div className="post-details">
				<h2 className="post-title">
					<a href={ post.url }>
						{ post.title }
					</a>
				</h2>
				<p className="post-hostname">{ parse_url.host }</p>
			</div>
			<PostMeta post={ post } />
		</>
	)
}

Post.propTypes = {
	post: PropTypes.object.isRequired
}

export default Post