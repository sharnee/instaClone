import React from 'react'
import Header from './header'
import Footer from './footer'
import Likes from './likes'
import Comments from './comments'

var DetailView = React.createClass({
	render: function() {
		return (
			<div class="body-container">
				<Header />
				<Image model="this.props.<endpoint_here>" />
				<Footer />
			</div>
		)
	}
})

var Image = React.createClass({
	render: function() {
		return (
			<section className="image-wrapper">
				<div className="image-container">
					<img src=" { this.props.get(imageURL) } " />
				</div>
				<div className="details-container">
					<CommentsHeader />
					<Comments />
				</div>
			</section>
		)
	}
})

export default DetailView


