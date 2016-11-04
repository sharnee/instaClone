import React from 'react'
import ReactDOM from 'react-dom'
import Backbone from 'backbone'
import Header from './view/header.js'

const app = function() {
//MODEL
	var PictureMOdel = Backbone.Collection.extend({
		url: 'some url',
		_key: 'some key',
		//temp parse function if needed. I don't think we will need this but it's here if we do. 
		parse: function(rawResponse){
	 			var parsedResponse = rawResponse.results
	 			return parsedResponse
	 		}
		})
//CONTROLLER
	var Controller = Backbone.Router.extend({
		routes:{
			'home': 'handleGrid',
			'search/:term': 'handleSearch',
			'detail/:id': 'handlDetail',
			'scroll': 'handleScroll',
			'creator': 'handleCreator',
			'*default': 'handleDefault'
		},
		handleGrid: function(){
			console.log('handeling Grid')
		},
		handleSearch: function(){
			console.log('handeling Search')
		},
		handlDetail: function(){
			console.log('handeling detail')
		},
		handleScroll: function(){
			console.log('handeling the Scroll')
		}, 
		handleCreator: function(){
			console.log('handeling the creator view')
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

