import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './view/header.js'

const app = function() {
//MODEL
	var PictureModel = Backbone.Collection.extend({
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
//CONTROLLER
	var Controller = Backbone.Router.extend({
		routes:{
			'listView': 'handleListView',
			'detail/:imageId': 'handlDetail',
			'*default': 'handleDefault'
		},
		handleListView: function(){
			console.log('handeling listView')
		},
		handlDetail: function(){
			var individualModel = new IndividualModel({
				id: imageId
			})

			console.log('handeling detail')
		},
		handleDefault: function(){
			location.hash = 'home'
			console.log('handeling Default')
		}, 
		initialize: function(){
			Backbone.history.start()
			console.log('being born now')
		}
	})
	var controller = new Controller
}
app()

