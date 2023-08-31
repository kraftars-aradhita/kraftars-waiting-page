let t_slideIndex = 1;
tshowSlides(t_slideIndex);

function tplusSlides(n) {
  tshowSlides(t_slideIndex += n);
}

function tcurrentSlide(n) {
  tshowSlides(t_slideIndex = n);
}

function tshowSlides(n) {
  let i;
  let testimonials = document.getElementsByClassName("testimonial");
  if (n > testimonials.length) {t_slideIndex = 1}    
  if (n < 1) {t_slideIndex = testimonials.length}
  for (i = 0; i < testimonials.length; i++) {
    testimonials[i].style.display = "none";  
  }
  
  testimonials[t_slideIndex-1].style.display = "block";  
}