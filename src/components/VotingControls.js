import React from 'react'
import PropTypes from 'prop-types'

import { RedditContext } from './RedditStore'
import { useContext } from 'react/cjs/react.development'

const VotingControls = ({ voteCount, id }) => {
	const { voteUp, voteDown } = useContext(RedditContext)
	return (
		<div className="voting-controls">
			<button
				onClick={ () => voteUp(id) }
				className="vote-up"
			>
				<i className="fa fa-chevron-circle-up" />
			</button>
			<span className="vote-count">{ voteCount }</span>
			<button
				onClick={ () => voteDown(id) }
				className="vote-down"
			>
				<i className="fa fa-chevron-circle-down" />
			</button>
		</div>
	)
}

VotingControls.propTypes = {
	voteCount: PropTypes.number.isRequired,
	id: PropTypes.number.isRequired
}

export default VotingControls