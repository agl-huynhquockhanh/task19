// Slider start
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}
// Slider end


$(document).ready( ()=>{
   // Function of section service at index page
  const tab1 = document.querySelector("#clickTap1");
  const tab2 = document.querySelector("#clickTap2");

  const click1 = document.querySelector(".p-service__click1");
  const click2 = document.querySelector(".p-service__click2");

  // Khi click vào tab1
  tab1.addEventListener("click", function(){
    click1.classList.add("p-service--active");
    click2.classList.remove("p-service--active");

    tab2.classList.remove("p-service__color");
    tab1.classList.add("p-service__color");
  });

  //Khi click vào tab2
  tab2.addEventListener("click", function(){
    click1.classList.remove("p-service--active");
    click2.classList.add("p-service--active");

    tab2.classList.add("p-service__color");
    tab1.classList.remove("p-service__color");
  });
  
});



//Slider gallery at page verhicle
var slideIndex__gallery = 1;
showSlides__gallery(slideIndex__gallery);

function plusSlides__gallery(n) {
  showSlides__gallery(slideIndex__gallery += n);
}

function currentSlide__gallery(n) {
  showSlides__gallery(slideIndex__gallery = n);
}

function showSlides__gallery(n) {
  var i;
  var slides__gallery = document.getElementsByClassName("mySlides__gallery");
  var dots__gallery = document.getElementsByClassName("demo");
  if (n > slides__gallery.length) {slideIndex__gallery = 1}
  if (n < 1) {slideIndex__gallery = slides__gallery.length}
  for (i = 0; i < slides__gallery.length; i++) {
      slides__gallery[i].style.display = "none";
  }
  for (i = 0; i < dots__gallery.length; i++) {
      dots__gallery[i].className = dots__gallery[i].className.replace(" active", "");
  }
  slides__gallery[slideIndex__gallery-1].style.display = "block";
  dots__gallery[slideIndex__gallery-1].className += " active";
}

// Accordion page faq
function accordion(){
  const accordion = document.getElementsByClassName('p-faq__faqItem');
  for (i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('p-faq__active');
  })
}
}