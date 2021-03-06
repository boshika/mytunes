// App.js - Defines a backbone model class for the whole app.
//Model class

var AppModel = Backbone.Model.extend({

  initialize: function(params){
   
    this.set('currentSong', new SongModel());
    this.set('songQueue', new SongQueue());


    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

  //this is referring to the SongModel class
  // function play in this class
    params.library.on('play', function(song){
      this.set('currentSong', song);
    }, this);

    params.library.on('enqueue', function(song){
      //console.log(song, 'songQueue', this);
      this.get('songQueue').add(song);
      //console.log(song, 'songQueue', this);
    }, this);
    
      // params.library.on('ended', function(song){
      //   this.get('songQueue').dequeue();
      // }, this);
    

    //set the songQueue, referring to the SongQueue in collection
    //
  }

});
