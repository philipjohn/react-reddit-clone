import React from 'react'
import ReactDOM from 'react-dom'

import PostList from './components/PostList'
import RedditStore from './components/RedditStore'

import './index.css'

const Reddit = () => (
	<PostList />
)

ReactDOM.render(
	<RedditStore>
		<Reddit />
	</RedditStore>,
	document.getElementById('root')
)