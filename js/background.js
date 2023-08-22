let video = document.getElementById("background_video");
let header = document.querySelector("header");
let fg = document.getElementsByClassName("foreground")[0];

if(window.innerWidth > 768){
    video.src = "videos/bg_slow.mp4";
    
    if(window.innerHeight - video.clientHeight > 25) {
        console.log("hiiiii");
        header.style.background = "black";
        header.style.height = (window.innerHeight - video.clientHeight) + "px";
        fg.style.paddingTop = header.clientHeight + 30 + "px";
        video.style.top = header.style.height;
    }
}




console.log(video.clientHeight);
console.log(window.innerHeight);
console.log(fg);
