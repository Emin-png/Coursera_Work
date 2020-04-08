(function(window){
    var byeSpeaker={};
    var speakword="Good Bye";
    byeSpeaker.speak=function(name){
        console.log(speakword + " " + name);
    }
    window.byeSpeaker=byeSpeaker;
})(window);