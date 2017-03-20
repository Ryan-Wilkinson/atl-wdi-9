$(function() {
	$('.get-gif').click(getGif)
	$('.save-gif').click(saveGif)
	$('.saved-gif').click(getSavedGif)
})

var getGif = function(event) {
  $.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&rating=pg')
  .done(function(giphyResponse) {
   $('.image-jumbotron').attr('src', giphyResponse.data.image_url)
  });
};

var saveGif = function(event) {
  var url = $('.image-jumbotron').attr('src');
  console.log(url)
  $.post('/gifs', { url: url })
    .done(function(response) {
      console.log(response)
    });
};
