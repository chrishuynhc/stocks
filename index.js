var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');

var app = express();

var port = process.env.PORT || 8080;

var yahoo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
var google = "https://www.google.com/finance/info?client=ig&q=";

app.get('/api/:_stock', function(req, res){

	//Headers
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

}

app.listen(port, function(){
	console.log('Server Started on Port 8080...');
});

function getData(){
	
}
