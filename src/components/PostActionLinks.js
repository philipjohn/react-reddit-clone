import React from 'react'
import PropTypes from 'prop-types'

const PostActionLinks = ({ id }) => (
	<span className="post-action-links">
		<a href={ `?share=${ id }` }>share</a>
		<a href={ `?save=${ id }` }>save</a>
		<a href={ `?hide=${ id }` }>hide</a>
		<a href={ `?report=${ id }` }>report</a>
	</span>
)

PostActionLinks.propTypes = {
	id: PropTypes.number.isRequired
}

export default PostActionLinks