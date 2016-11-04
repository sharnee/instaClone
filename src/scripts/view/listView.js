import React from "react"
import Header from "./header"

var ListView = React.createClass({
    render: function() {
        return (
            <div class="body-container">
                <Header />
                    <div className="image-column">
                    <Image model="this.props.<endpoint_here>" />
                    </div>
            </div>
        )
    }
})

var ImageContainer = React.createClass({
    _getImages: function(){
        var imageArray = []
        for(var i=0; i < this.props.imageURL; i++){
            var imageModel = this.props.imageURL[i]
            imageArray.push(<Image model={imageModel} />)
        }
        return imageArray
    },
    render: function(){
        console.log("images seen in container", this.props)
        return(
            <div className="image-list">
                {this._getImages()}
            </div>
            )
    }
})


var Image = React.createClass({
    render: function(){
        console.log("ListView Components", this)
        return (
            <section className="list-view">
                <div className="image-list">
                <header className="instaclone-header" />
                </div>
                <div className="image-column">
                    <img src="{ this.props.get(imageURL)}" />
                    <img src="{ this.props.get(imageURL)}" />
                    <img src="{ this.props.get(imageURL)}" />
                    //so on and so forth
                </div>
                <CommentsHeader />
                <Comments />
            </section>
        )
    }
})

export default ListView