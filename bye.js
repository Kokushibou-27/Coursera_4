(function (window){
  var speakWord = "Goodbye";

  var helloSpeaker = {
      speak: function(name) {
    console.log(speakWord + " " + name);
      }
};
  window.helloSpeaker = helloSpeaker;
})(window);
