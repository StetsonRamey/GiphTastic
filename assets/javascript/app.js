// GLOBAL VARIABLES
// ===================================================
var key = "ZeKnEFlNSXBStYoC3CKTGrP28TaRnps1";
var gifLimit = "&limit=10";
var baseURL = "https://api.giphy.com/v1/gifs/search?q=";
// var gifURL = "https://api.giphy.com/v1/gifs/search?q=gosling&api_key=" + key + "&limit=10";
var topics = ["gosling", "cats", "disney", "mustache", "babies", "falling", "will ferrell", "fail"];



// FUNCTIONS
// ===================================================
// make the buttons display on the screen
function renderButtons() {
  $("#buttons-view").empty();

  for (var i = 0; i < topics.length; i++) {
    var a = $('<button type="button">');
    a.addClass("btn search-btn");
    a.attr("data-name", topics[i]);
    a.text(topics[i]);
    $("#buttons-view").append(a);
  }
}
// call the gifs in
function getGifURL() {
  // now based on button clicked, I have to finish the URL
  $(".search-btn").click(function() {
    var qSearch = $(this).attr("data-name");
    // have to remove spaces if there are any
    var qSearchURL = qSearch.split(" ").join("+");
    // put the URL together
    var gifURL = baseURL + qSearchURL + "&api_key=" + key + gifLimit;
    // run this function here so we have access to gifURL
    function getGifs() {
      // hit the APIs
      $.ajax({
        url: gifURL,
        method: "GET"
      }).then(function(response) {

        for (var i = 0; i < 10; i++) {

          var gifDiv = $("<div>");
          gifDiv.addClass("gif-container");
          var rating = response.data[i].rating;
          gifDiv.append("<p>Rating: " + rating + "</p>");

          var staticURL = response.data[i].images.fixed_height_small_still.url;
          var still = $("<img>");
          still.attr("src", staticURL);
          still.attr("alt", qSearch + " is missing");
          still.addClass("static");
          gifDiv.append(still);

          $("#gif").prepend(gifDiv);

        }
      });
    }
    getGifs();
  });
}

// function to set the state of the gifs, whether they are static or dynamic
function animate() {
  // store the url of the clicked gif in a variable
  var clickedURL = $(this).attr("src");
  // set a state varialbe to the initial case
  var state = $(this).attr("class");
  // testing and debugging
  console.log(state);
  // run a test so we know what state the gif is in
  if (state === 'static') {
    // if the gif is static, animate it and set the state to dynamic
    var dynamicURL = clickedURL.split('_s').join('');
    // push it to the screen
    $(this).attr("src", dynamicURL);
    // set the state
    $(this).attr("class", "dynamic");
  } else if (state === 'dynamic') {
    // else if the gif is running, set it back to static
    staticURL = clickedURL.split('.gif').join('_s.gif');
    // push it to the screen
    $(this).attr("src", staticURL);
    // set the state
    $(this).attr("class", "static");
  }
}

// handler for adding movies with the input form
$("#add-gif").on("click", function(event) {
  event.preventDefault();
  var gif = $("#gif-input").val().trim();
  topics.push(gif);
  renderButtons();
  getGifURL();
  // reset the form to the placeholder after running
  resetForm();
});
// reset the form field to original value -- little trick I found searching around
function resetForm() {
  $("#gif-form")[0].reset();
}





// GAME LOGIC
// ===================================================
renderButtons();

getGifURL();

$(document).on("click", ".static", animate);
$(document).on("click", ".dynamic", animate);
