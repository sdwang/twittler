$(document).ready(function(){
    var $feed = $('.feed');
    $feed.html('');

    //var index = streams.home.length - 1;
    var index = 0;
    var streamsLength = streams.home.length - 1;

    var updateFeed = function() {
        while(index <= streamsLength){
        var tweet = streams.home[index];
        var $tweet = $('<div></div>');

        var $user = $('<span class="userName"></span>');
        $user.text('@' + tweet.user);
        $user.appendTo($tweet);

        var $message = $('<span></span>');
        $message.text(': ' + tweet.message);
        $message.appendTo($tweet);

        var $time = $('<span></span>');
        $time.text(' ' + tweet.created_at);
        $time.appendTo($tweet);
        //$tweet.text('@' + tweet.user + ': ' + tweet.message + tweet.created_at);
        $tweet.prependTo($feed);
        index += 1;
      }
    };

    //Initial update of feed right after the DOM loads
    updateFeed();

    //Listens for button event. Prepends new tweets to the feed
    $(".refresh").on('click', function() {
      if(streams.home.length - 1 > index) {
        streamsLength = streams.home.length - 1;
        updateFeed();
      }
    })

    $(".userName").on('click', function() {
        //show only tweets that are in the user's stream
        $feed.html('');
        streamsLength = streams.users[this.text().replace('@','')];
        updateFeed();
    })


});
