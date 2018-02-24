# Week-6 Game - GifTastic
*The week 6 game pulls the giphy API to display a set number (10) gifs to the page.  The page also displays the gifs rating, and you can pause/unpause the gifs with a click.  In addition to the preloaded gifs, a user can add buttons dynamically for search queries of their choosing*

Updated the portfolio page with link as well


[Portfolio Page][1]

[GifTastic Game Page][2]

[1]: https://stetsonramey.github.io/Responsive-Portfolio/portfolio.html
[2]: https://stetsonramey.github.io/GiphTastic/

Table of Contents
=================
<!--ts-->
  * [Table of Contents](#table-of-contents)
  * [Philosophy](#philosophy)
  * [Struggles](#struggles)
  * [Ideas for Improvement](#ideas-for-improvement)
  * [Styling](#styling)
<!--te-->

  Philosophy
  ==========
  The concept is simple:
  * pull the giphy API
  * have an initial array of topics
  * when the page loads, render the array of topics to buttons
  * when user clicks button, pull 10 gifs and load them to the page in a static state
  * when you click a gif, it animates, click again, it pauses
  * input form where you can type a query and it'll put a button on the page that works

  Struggles
  =========
  The tough part was getting the gifs to animate.  I got through it before we went over it in class, and I realized after the way we did it in class is likely more correct (I'll add some thoughts in the Ideas for Improvement Section).  I noticed that static gifs have a `_s` in the URL.  So I researched some methods to split the string and then join it again, basically brute for manipulation of the URL.  

  After that I manipulated the state by setting the state in the class of the container.  Similar to what we did in class, but slightly different.

  Ideas for Improvement
  =====================
  Were I to do it over, I would modify the state based on the full URL.  In our case, it works fine, but if we were dealing with URLs that contained `_s` or even `_` earlier in the string, that'd be tough to deal with and would break the app.

  Styling
  =======
  I added the gif in the header of the page for fun.  I did it with the embed code straight from giphy, and I notice that on hover the right side icons for share and giphy don't show up right.  I could mess with that I think to get it working correctly.

  I played with the responsive settings in bootstrap and got things to jump around the way I wanted them to for mobile, so I'm happy with buttons and input form.  I'd like to mess with the gifs themselves, perhaps making them bigger, messing with sizing, cleaning up the styling for the rating, just small stuff like that.
