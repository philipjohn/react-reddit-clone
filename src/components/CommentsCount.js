import React from 'react'
import PropTypes from 'prop-types'

const CommentsCount = ({ count }) => {
	const text = count > 1 ? 'comments' : 'comment'

	return (
		<span className="comments-count">
			<a href="/">
				{ count !== 0 && `${ count } ` }
				{ text }
			</a>
		</span>
	)
}

CommentsCount.propTypes = {
	count: PropTypes.number.isRequired
}

export default CommentsCount