import React from 'react'
import Header from './header'
import Footer from './footer'

var DetailView = React.createClass({
	render: function() {
		return (
			<div class="body-container">
				<Header />
				<section className="">
					<Image model="this.props.<endpoint_here>" />
					<Likes />
					<Comments model="this.props.<endpoint_here>" />
				</section>
				<Footer />
			</div>
		)
	}
})

var Image = React.createClass({
	render: function() {
		return (
			<div className="main-image">
			
			</div>
		)
	}
})

export default DetailView