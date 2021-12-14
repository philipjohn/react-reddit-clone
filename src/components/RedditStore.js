import React, { createContext, useEffect, useState } from "react";
import data from '../reddit-data.json'

export const RedditContext = createContext()

const RedditStore = ({ children }) => {

	const [ posts, setPosts ] = useState([])

	// Sort posts by votes, descending order
	useEffect(() => {
		setPosts(
			data.data.children.sort((a, b) => parseFloat(b.data.score) - parseFloat(a.data.score))
		)
	}, [ posts, setPosts ])

	const onVoteUp = (id) => {
		let index = posts.findIndex(i => i.data.id === id)
		setPosts(posts => {
			const copy = [ ...posts ]
			copy[ index ].data.score++
			return copy
		})
	}

	const onVoteDown = (id) => {
		let index = posts.findIndex(i => i.data.id === id)
		setPosts(posts => {
			const copy = [ ...posts ]
			copy[ index ].data.score--
			return copy
		})
	}

	return (
		<RedditContext.Provider
			value={ {
				posts,
				voteUp: onVoteUp,
				voteDown: onVoteDown
			} }
		>
			{ children }
		</RedditContext.Provider>
	)

}

export default RedditStore