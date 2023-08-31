let currentBanner = 0;
let banners = document.getElementsByClassName("banner");


function swipeLeft(){
    document.getElementById("banner" + (currentBanner+1)).classList.add("invisible");
    document.getElementById("banner" + (currentBanner)).classList.remove("invisible");
    currentBanner--;

    if(currentBanner === 0){
        document.getElementById("left").classList.add("invisible");
    }
    else{
        document.getElementById("left").classList.remove("invisible");
    }

    if(currentBanner === banners.length - 1){
        document.getElementById("right").classList.add("invisible");
    }
    else{
        document.getElementById("right").classList.remove("invisible");
    }
}

function swipeRight(){
    document.getElementById("banner" + (currentBanner+1)).classList.add("invisible");
    document.getElementById("banner" + (currentBanner+2)).classList.remove("invisible");
    currentBanner++;

    if(currentBanner === 0){
        document.getElementById("left").classList.add("invisible");
    }
    else{
        document.getElementById("left").classList.remove("invisible");
    }

    if(currentBanner === banners.length - 1){
        document.getElementById("right").classList.add("invisible");
    }
    else{
        document.getElementById("right").classList.remove("invisible");
    }
}

document.addEventListener("load", function(){
    setTimeout(()=> {
        document.getElementById("preloader").remove();
    } , 50); // after 5 sec it will remove.
});


window.onload=function(){
    const element = document.getElementById("preloader");
    element.remove();
}






function swipeLeft2() {
    console.log("left");
    document.getElementById("banner1").classList.remove("invisible");
    document.getElementById("banner2").classList.add("invisible");
    document.getElementById("left").classList.add("invisible");
    document.getElementById("right").classList.remove("invisible");
}

function swipeRight2() {
    console.log("right");
    document.getElementById("banner1").classList.add("invisible");
    document.getElementById("banner2").classList.remove("invisible");
    document.getElementById("left").classList.remove("invisible");
    document.getElementById("right").classList.add("invisible");
}

setInterval(function() {

    
    
    
    
  }, 10);



  function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}