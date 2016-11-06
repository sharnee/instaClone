import React from "react"
import Header from "./header"
import Footer from "./footer"
import Comments from "./comments"
import CommentsHeader from "./commentsHeader"

var ListView = React.createClass({
	render: function() {
		return (
			<div className="body-container">
				<Header />
				<div className="image-column">
					<Images collection={this.props.collection} />
				</div>
				<Footer />
			</div>
			)
	}
})

var Images = React.createClass({
	_getImages: function(modelsArr) {
		var imageArray = []
		for ( var i = 0; i < modelsArr.length; i++ ) {
			imageArray.push(
				<div className="image-container"> {<CommentsHeader model={modelsArr[i]} />} <img src={modelsArr[i].get('imageURL')} /> {<Comments model={modelsArr[i]}  />} </div>
			)

		}
		return imageArray
	},
	render: function() {
		var imagesData = this.props.collection
		var modelsArr = imagesData.models
		return (
			<div>
				{this._getImages(modelsArr)}
			</div>
			)
	}
})

export default ListView