
var key = "ZeKnEFlNSXBStYoC3CKTGrP28TaRnps1";
var gifURL = "https://api.giphy.com/v1/gifs/search?q=gosling&api_key=" + key + "&limit=10";
console.log(gifURL);

$.ajax({
  url: gifURL,
  method: "GET"
}).then(function (response) {




  for (var i = 0; i < 10; i++) {
    var gifURL = response.data[i].images.fixed_height_small_still.url;
    // console.log(gifURL);
    var still = $("<img>");
    still.attr("src", gifURL);
    still.addClass("dynamic");
    $("#gif").append(still);
  }

  $(".dynamic").click(function () {
    var clickedURL = $(this).attr("src");
    console.log('---------------------');
    console.log(clickedURL);
    console.log('---------------------');
    console.log('+++++++++++++++++++++++++');
    var splitURL = clickedURL.split('_');
    console.log(splitURL[0]);
    console.log('+++++++++++++++++++++++++');
    console.log('=========================');
    var dynamicURL = splitURL[0] + '.gif';
    console.log(dynamicURL);
    console.log('=========================');
    $(this).attr("src", dynamicURL);

  })


})
