var express = require('express');
var request = require('request');
var cheerio = require('cheerio');
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var app = express();
server.listen(process.env.PORT || 8080);

var yahoo = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22AAPL%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=";
var google = "https://www.google.com/finance/info?client=ig&q=";

app.get('/api/:_stock', function(req, res){

	//Headers
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

});

io.sockets.on('connection', function(socket){
	console.log('Connected')
	socket.on('ticker', function(ticker){
		getInfo(socket, ticker);
	})
});


function getInfo(socket, ticker){

	
	https.get({
		method: 'GET',
		hostname: 'https://query.yahooapis.com',
		path: '/v1/public/yql?q=select%20*%20from%20yahoo.finance.quotes%20where%20symbol%20in%20(%22' + ticker + '%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=',
		timeout: 1000
	}, function(response){
		response.setEncoding('utf8');
		var data = '';

		response.on('data', function(chunk){
			data += chunk;
		});

		response.on('end', function(){

			if (data.length > 0){

				var dataObj;

				try {
					dataObj = JSON.parse(data);
				} catch(e) {
					return false;
				}

				var stock = {};

				stock.ticker = dataObj.query.results.quote.symbol;
				console.log(stocks.ticker);
			}

		})


	})
}
