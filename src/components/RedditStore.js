import React, { createContext, useState } from "react";
import data from '../sample-data.json'

export const RedditContext = createContext()

const RedditStore = ({ children }) => {

	const [ posts, setPosts ] = useState(data)

	// Sort posts by votes, descending order
	posts.sort((a, b) => parseFloat(b.votes) - parseFloat(a.votes));

	const onVoteUp = (id) => {
		let index = posts.findIndex(i => i.id === id)
		setPosts(posts => {
			const copy = [ ...posts ]
			copy[ index ][ "votes" ]++
			return copy
		})
	}

	const onVoteDown = (id) => {
		let index = posts.findIndex(i => i.id === id)
		setPosts(posts => {
			const copy = [ ...posts ]
			copy[ index ][ "votes" ]--
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