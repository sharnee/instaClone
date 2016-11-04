import React from 'react'

var Comments = React.createClass({
	_listComments: function(commentsArray) {
		var commentStr = ''
		for ( var i = 0; i < commentsArray.length; i++) {
			commentStr += '<li><strong>' + commentsArray[i].byUser + '</strong> ' + commentsArray[i].message + '</li>'
		}
		return (<ul> {commentStr} </ul>)
	},
	render: function() {
		var detailData = this.props.model
		return (
			<section className="comments">
				{this._listComments(detailData.get('comments'))}
			</section>

		)
	}
})

export default Comments