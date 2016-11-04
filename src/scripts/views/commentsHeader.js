import React from 'react'

var CommentsHeader = React.createClass({
	render: function() {
		return (
			<header className="image-details">
				<img src=" { user_avatar_src } " />
				<h3> { user_name with link } </h3>
			</header>
		)
	}
})

export default Comments