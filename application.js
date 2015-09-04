$(document).ready(function(){
    var $feed = $('.feed');
    $feed.html('');

    //var index = streams.home.length - 1;
    //var index = 0;
    //var streamsLength = streams.home.length - 1;

    var updateFeed = function(stream, index, streamsLength) {
        while(index <= streamsLength){
        var tweet = stream[index];//streams.home[index];
        var $tweet = $('<div class="tweet"></div>');

        var $user = $('<span class="userName"></span>');
        $user.text('@' + tweet.user);
        $user.appendTo($tweet);

        var $time = $('<span class="timeStamp"></span>');
        $time.text(' ' + moment(tweet.created_at).fromNow());
        $time.appendTo($tweet);

        var $message = $('<span class="message"></span>');
        $message.text(tweet.message);
        $message.appendTo($tweet);
        
        $tweet.prependTo($feed);
        index += 1;

        $('.userName').on('click', function() {
            //show only tweets that are in the user's stream
            $feed.html('');
            //$(this).text().replace('@','')];
            var name = $(this).text().replace('@','');
            updateFeed(streams.users[name], 0, streams.users[name].length - 1);
        })
      }
    };

    //Initial update of feed right after the DOM loads
    updateFeed(streams.home, 0, streams.home.length - 1);

    //Listens for button event. Prepends new tweets to the feed
    $('.refresh').on('click', function() {
      //if(streams.home.length - 1 > index) {
        //streamsLength = streams.home.length - 1;
        $feed.html('');
        updateFeed(streams.home, 0, streams.home.length - 1);
      //}
    })

    $('#submitTweet').on('click', function() {
        if(streams.users.myself === undefined) {
            streams.users.myself = [];
        };
        var tweet = {
            user: "myself",
            message: $('#userTweet')[0].value,
            created_at: new Date()
        };

        addTweet(tweet);
        updateFeed(streams.home, 0, streams.home.length - 1);

    })


});
