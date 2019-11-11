

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

var menuBtn = document.querySelector('.menu-icon');
var menuList = document.querySelector('.menu-list');
var coordinate=document.querySelector('.coordinate');

menuBtn.addEventListener('click', function(evt){
    evt.preventDefault();

    
    if(menuBtn.classList.contains('close')){
       menuList.style.display="none"; 
       menuBtn.classList.remove('close');
    }else{
        menuList.style.display="block";
         menuBtn.classList.toggle('close');
    }

})


var messageBlock =document.querySelectorAll(".message-block");
var messageBtnBack = document.querySelector('.back');
var messageBtnForward = document.querySelector('.forward');

var firstSlide=0;
var lastSlide=2;



messageBtnForward.addEventListener('click', function(){
    if(messageBlock[lastSlide]!==messageBlock[messageBlock.length-1]){
        messageBlock[lastSlide+1].style.display="block"
        messageBlock[firstSlide].style.display="none"
        firstSlide++;
        lastSlide++;
    };
  
});

messageBtnBack.addEventListener('click', function(){
    if(firstSlide!==0){
        messageBlock[lastSlide].style.display="none"
        messageBlock[firstSlide-1].style.display="block"
        firstSlide--;
        lastSlide--;
    };
});
