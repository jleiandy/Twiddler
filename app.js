$(document).ready(function(){
// Select already existing elements
var $app = $('#app');
$app.html('');

// Create new HTML elements
var $title = $('<h1>Twiddler</h1>');
var $updateButton = $('<button class="update-feed">Update Feed</button>');
var $feed = $('<div id=feed></div>')




// Create event handler functions
var alertTitle = function(event) {
    console.log(event);
    alert('The title of this page is: ' + event.target.innerText)
  }

var renderFeed = function() {
    var index = streams.home.length - 1;
    while(index >= 0) {
      var tweet = streams.home[index];

      var $tweetDiv = $('<div class="tweet"></div>');
      $tweetDiv.appendTo($feed);

      var $profilePic = $('<img class="profile-photo" src="assets/img/' + tweet.user + '.png" alt="Picture of ' + tweet.user + '">');
      $profilePic.appendTo($tweetDiv);

      var $username = $('<div class="username">@' + tweet.user + '</div>');
      $username.appendTo($tweetDiv);

      var $tweetMsg = $('<p class="message">' + tweet.message + '</p>');
      $tweetMsg.appendTo($tweetDiv);

      var $timeStamp = $('<div class="timestamp">' + tweet.created_at + '</div>');
      $timeStamp.appendTo($tweetDiv);

      var $commentButton = $('<img class="icon comment" src="assets/icons/placeholder.png">');
      $commentButton.appendTo($tweetDiv);

      var $retweetButton = $('<img class="icon retweet" src="assets/icons/placeholder.png">');
      $retweetButton.appendTo($tweetDiv);

      var $likeButton = $('<img class="icon like" src="assets/icons/placeholder.png">');
      $likeButton.appendTo($tweetDiv);

      var $shareButton = $('<img class="icon share" src="assets/icons/placeholder.png">');
      $shareButton.appendTo($tweetDiv);


      index -= 1;
    }
    };

var refreshFeed = function() {
  $("#feed").children().remove();
  renderFeed();
}

// Set event listeners (providing appropriate handlers as input)
$title.on("click", alertTitle);
$updateButton.on("click", refreshFeed);

// Append new HTML elements to the DOM
$title.appendTo($app);
$updateButton.appendTo($app);
$feed.appendTo($app);




 renderFeed();
});