var url = 'sample.mp3';
var source;
var context = new webkitAudioContext();
var analyser = context.createAnalyser();

function playSound(buffer) {
  source = context.createBufferSource();
  source.buffer = buffer;
  source.connect(analyser);
  analyser.connect(context.destination);
  source.noteOn(0);
};

function request() {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    context.decodeAudioData(request.response, function(buffer) {
      // play!
      console.log("playing ...")
      console.log("for raphael <3")
      playSound(buffer);
    });
  };
  request.send();
};

// go!
request();

// countdown
$(function(){
  var timer = setInterval(function(){
    $(".count").html(function(i,html){
      if(parseInt(html)>1) {
        return parseInt(html)-1;
      } else {
        clearTimeout(timer);
        return "play!!";
      }
    });
  },1500);
});

