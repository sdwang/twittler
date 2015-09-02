$(document).ready(function(){
        var $feed = $('.feed');
        $feed.html('');

        //var index = streams.home.length - 1;
        var index = 0;
        var streamsLength = streams.home.length - 1;
        while(index <= streamsLength){
          var tweet = streams.home[index];
          var $tweet = $('<div></div>');
          $tweet.text('@' + tweet.user + ': ' + tweet.message + tweet.created_at);
          $tweet.appendTo($feed);
          index += 1;
        }

        //Listens for button event. Prepends new tweets to the feed
        $('button').on('click', function() {
          if(streams.home.length - 1 > index) {
          }
        })


      });