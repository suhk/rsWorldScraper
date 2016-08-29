var scrape = function() {
  $.get('/scrape5758', (data) => {
    console.log('123');
    $('#main').html(data);
  });
};

$(() => {
  setInterval(scrape, 5000);
});
