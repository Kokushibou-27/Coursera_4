(function (window){
    var speakWord = "Hello";
  
    var helloSpeaker = {
      speak: function(names) {
        console.log(speakWord + " " + names);
      }
    };
    
    window.helloSpeaker = helloSpeaker;
  })(window);
  
