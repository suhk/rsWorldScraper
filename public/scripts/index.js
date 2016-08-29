var scrape = function() {
  $.get('/scrape5758', (data) => {
    dataObj = JSON.parse(data);

    if($('#content:first-child').children().length < 2) {
      tableInit(dataObj);
    } else {
      tableUpdate(dataObj);
    }
  });
};

var tableInit = function(data) {
  Object.keys(data).forEach(function(key, index) {
    $('#content').append('<tr id="' + key + '"><td class="one">' + key + '</td><td class="two">' + data[key] + '</td><td class="three">0</td></tr>')
  });
};

var tableUpdate = function(data) {
  Object.keys(data).forEach(function(key, index) {
    var prev = parseInt($('#' + key + ' .two').text());
    var diff = parseInt(data[key]) - prev;

    $('#' + key + ' .two').text(data[key]);
    $('#' + key + ' .three').text(diff);

    if(diff >= 10 || diff <= -10) {
      $('#' + key + ' .three').prop('style', 'color:red;');
    } else {
      $('#' + key + ' .three').prop('style', 'color:black;');
    }
  });
}

$(() => {
  scrape();
  setInterval(scrape, 15000);
});
