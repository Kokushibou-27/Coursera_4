(function (window){
    var speakWord = "Goodbye";
  
    var byeSpeaker = {
      speak: function(names) {
        console.log(speakWord + " " + names);
      }
    };
    
    window.byeSpeaker = byeSpeaker;
  })(window);
