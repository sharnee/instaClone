import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './views/header'
import DetailView from './views/detailView.js'

const app = function() {
//MODEL
	var PictureCollection = Backbone.Collection.extend({
		url: 'https://instaclone-example.now.sh/api/gram',
		// _key: 'some key',
		// temp parse function if needed. I don't think we will need this but it's here if we do. 
		parse: function(rawResponse){
	 			var parsedResponse = rawResponse.results
	 			return parsedResponse
	 		}
		})
	var IndividualModel = Backbone.Model.extend ({
		urlRoot: 'https://instaclone-example.now.sh/api/gram/'	
	})

	var SearchCollection = Backbone.Collection.extend({
		url: 'https://instaclone-example.now.sh/api/gram/search'
	})
//CONTROLLER
	var Controller = Backbone.Router.extend({
		routes:{
			'listView': 'handleListView',
			'detail/:imageId': 'handlDetail',
			'search/:searchTerm': 'handleSearch',
			'*default': 'handleDefault'
		},
		handleListView: function(){
			// console.log('handeling listView')
			var PictureCollection = new PictureCollection()
			var promise = PictureCollection.fetch()
			promise.then(
				function(){
					ReactDOM.render(<ListView collection={pictureModel} />, document.querySelector('.body-wrapper'))
				})
		},
		handlDetail: function(imageId){
			//this is how we grab the id from the hash
			var individualModel = new IndividualModel({
				id: imageId
			})
			var promise = individualModel.fetch()
			promise.then(
				function(){
					// console.log(individualModel)
					ReactDOM.render(<DetailView collection={individualModel} />, document.querySelector('.body-wrapper'))
				})
			// console.log('handeling detail')
		},
		handleSearch: function(searchTerm){
			var searchView = new SearchCollection()
			var promise = SearchCollection.fetch({
				data:{
					'term': searchTerm
				}
				ReactDOM.render(<ListView collection={individualModel} />, document.querySelector('.body-wrapper'))
			})
		},
		handleDefault: function(){
			location.hash = 'home'
			// console.log('handeling Default')
		}, 
		initialize: function(){
			Backbone.history.start()
			console.log('being born now')
		}
	})
	var controller = new Controller
}
app()

