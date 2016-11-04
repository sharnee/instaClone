import React from 'react'
import Header from './header'
import Footer from './footer'
// import Likes from './likes'
import Comments from './comments'

var DetailView = React.createClass({
	render: function() {
		
		return (
			<div className="body-container">
				<Header />
				<Image model={this.props.model} />
				<Footer />
			</div>
		)
	}
})

var Image = React.createClass({
	render: function() {
		console.log(this.props.model)
		var detailData = this.props.model
		return (			
			<section className="image-wrapper">
				<div className="image-container">
					<img src={ detailData.get('imageURL') } />
				</div>
				<div className="details-container">
					<CommentsHeader model={this.props.model} />
					<Comments model={this.props.model} />
				</div>
			</section>
		)
	}
})

export default DetailView


// 
// <CommentsHeader />
// 					<Comments />	