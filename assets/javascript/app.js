// GLOBAL VARIABLES
// ===================================================
var key = "ZeKnEFlNSXBStYoC3CKTGrP28TaRnps1";
var gifLimit = "&limit=10";
var gifURL = "https://api.giphy.com/v1/gifs/search?q=";
// var gifURL = "https://api.giphy.com/v1/gifs/search?q=gosling&api_key=" + key + "&limit=10";
var topics = ["gosling", "cats", "disney", "mustache", "babies", "falling", "will ferrell", "fail"];

// so if there's a space in the array string, have to replace that with an & for API URL
$.each(topics, function() {
  var urlTopics = (this.split(" ").join("&"));
  console.log(urlTopics);
});


// FUNCTIONS
// ===================================================
function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $('<button type="button">');
    a.addClass("btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
}

function getGifs() {
  // hit the APIs
  $.ajax({
    url: gifURL,
    method: "GET"
  }).then(function(response) {

    for (var i = 0; i < 10; i++) {
      var staticURL = response.data[i].images.fixed_height_small_still.url;
      // console.log(gifURL);
      var still = $("<img>");
      still.attr("src", staticURL);
      still.addClass("dynamic");
      $("#gif").append(still);
    }

    // create a var for the state of the gif
    var clickedGif = false;
    // run the logic when the user clicks
    $(".dynamic").click(function() {
      // store the url of the clicked gif in a variable
      var clickedURL = $(this).attr("src");
      // testing and debugging
      console.log(clickedURL);
      // run a test so we know what state the gif is in
      if (!clickedGif) {
        // if the gif is static, animate it and set the state to running
        var dynamicURL = clickedURL.split('_s').join('');
        // testing and debugging
        console.log(dynamicURL);
        // push it to the screen
        $(this).attr("src", dynamicURL);
        // set the state
        clickedGif = true;
      } else {
        // else if the gif is running, set it back to static
        staticURL = clickedURL.split('.gif').join('_s.gif');
        // testing and debugging
        console.log(staticURL);
        // push it to the screen
        $(this).attr("src", staticURL);
        // set the state
        clickedGif = false;
      }
    })
  })
}
// GAME LOGIC
// ===================================================

renderButtons();
