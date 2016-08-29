var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape5758', function(req, res){
  url = 'http://oldschool.runescape.com/slu';
  request(url, function(err, response, html) {
    if(!err) {
      var $ = cheerio.load(html);
      res.status(200).json(JSON.stringify($.html()));
    }
  });
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, () => console.log('server up'));
