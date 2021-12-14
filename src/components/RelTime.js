import React from 'react'
import PropTypes from 'prop-types'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'

const RelTime = ({ publishedTime }) => {
	const timeString = new Date(publishedTime)
	TimeAgo.addDefaultLocale(en)
	const timeAgo = new TimeAgo('en-US')
	const relTime = timeAgo.format(timeString)

	return (
		<span className="post-time">Submitted { relTime }</span>
	)
}

RelTime.propTypes = {
	publishedTime: PropTypes.string.isRequired
}

export default RelTime