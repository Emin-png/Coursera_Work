(function(window){
    var helloSpeaker={};
    var speakword="Hello";
    helloSpeaker.speak=function(name){
        console.log(speakword + " " + name);
    }
    window.helloSpeaker=helloSpeaker;
})(window);