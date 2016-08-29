var express = require('express');
var fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app = express();

app.get('/scrape5758', function(req, res){
  url = 'http://oldschool.runescape.com/slu?order=WMLPA';
  request(url, function(err, response, html) {
    if(!err) {
      var $ = cheerio.load(html);
      var $worlds = $('.server-list__row');
      var resJSON = {};

      for(var i = 0; i < $worlds.length; i += 1) {
        if($worlds[i].children[1].next.next.children[0] != null) {
          var worldNumber, playerCount;
          worldNumber = $worlds[i].children[0].next.children[1].attribs.id.slice(-3);
          playerCount = $worlds[i].children[1].next.next.children[0].data.split(' ')[0];
          resJSON[worldNumber] = playerCount;
        }
      }

      res.status(200).json(JSON.stringify(resJSON));
    }
  });
});

app.use('/', express.static(__dirname + '/public'));

app.listen(3000, () => console.log('server up'));
