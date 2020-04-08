var allnames={};
allnames.mynames=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i=0; i<allnames.mynames.length; i++){
    if (allnames.mynames[i].charAt(0)=="J" || allnames.mynames[i].charAt(0)=="j"){
        byeSpeaker.speak(allnames.mynames[i]);
    }
    else{
        helloSpeaker.speak(allnames.mynames[i]);
    }
}