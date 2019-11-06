

$(document).ready(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause")                 
    };
                
    var video = controls.video[0];
       
    controls.playpause.click(function(){
        if (video.paused) {
            video.play();
            $(this).css('background-image', "url(img/pause.svg)");  
        } else {
            video.pause();
            $(this).css('background-image', "url(img/icon-play.svg)");
        }
                
        $(this).toggleClass("paused"); 
    });
});

/*var btn=$('#playpause').css('background-image');

console.log(btn);*/