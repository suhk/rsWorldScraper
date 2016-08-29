var scrape = function() {
  $.get('/scrape5758', (data) => {
    console.log(JSON.parse(data));
    $('#main').html(JSON.parse(data));
  });
};

$(() => {
  setInterval(scrape, 5000);
});
