import React from 'react'

var CommentsHeader = React.createClass({
	render: function() {
		return (
			<header className="image-details">
				<img src=" https://s3.amazonaws.com/uifaces/faces/twitter/rem/128.jpg " />
				<h3> { user_name with link } </h3>
			</header>
		)
	}
})

export default Comments