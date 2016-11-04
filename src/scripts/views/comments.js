import React from 'react'

var Comments = React.createClass({
	listComments: function() {
		var commentStr = ''
		for ( var i = 0; i < {commentArray}.length; i++) {
			commentStr += '<li><strong>' + { user_name } + '</strong> ' + { comment } + '</li>'
		}
		return ('<ul>' + commentStr + '</ul>')
	}
	render: function() {
		return (
			<section class="comments">
				{listComments()}
			</section>

		)
	}
})

export default Comments