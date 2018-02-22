# Week-6 Game - GifTastic
*Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit.*

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
<!--te-->


  Philosophy
  ==========
  The idea on this one was to store variables in arrays and objects, or objects inside of arrays.  My goal was to make the whole game playable without re-loading the page.  Questions are to advance by themselves, and the game reset needed to be tied to a button at the end of the game.


  Struggles
  =========
  I struggled with how to figure out if the user selected the right answer.  Basically, you have to take a question which is a string, and somehow convert that to a number to run through a boolean.  To do this, I ended up making using of the `indexOf()` method to find the position of the correct answer in the array, and then tying the user's answer to a number which I could check to see if that matched the position of the correct answer in the array.

  The other thing that I ended up looking up was what and how to tie function together.  I had a rough idea of what functions I would need, but I had to search out some help from other code for the loop to get the next question, and the code to check if the answer was right or not.


  Ideas for Improvement
  =====================
  I added the place for some gifs tied in with an API, but didn't have time to incorporate them.  Also, I'd like to know if there is a more efficient way to write this with less code.  What I have works, it just seemed like a lot of code for something so simple.  

  Also, there's always room for improvement on the UI side of this.  Some different color text and other styling tweaks to clean up the look could help the whole game experience.
