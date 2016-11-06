import React from 'react'

var CommentSubmit = React.createClass({
	render: function() {
		return (

			<form className="comment-submit">
				<input type="hidden" name="gramID" defaultValue="gramID" />
				<input type="text" name="userName" maxlength="40" placeholder="Username" />
				<textarea type="text" name="message" rows="3" maxlength="140" placeholder="Your message" />
				<input type="submit" value="submit" />
			</form>

		)
	}
})

export default CommentSubmit