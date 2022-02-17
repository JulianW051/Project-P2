// Back to top button
$(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 900) {
      $("body").addClass("changeColor");
    } else {
      $("body").removeClass("changeColor");
    }
  });
});

window.onscroll = function () {
  if (pageYOffset >= 200) {
    document.getElementById("arrow").style.visibility = "visible";
  } else {
    document.getElementById("arrow").style.visibility = "hidden";
  }
};

// Slideshow
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// Insta feed
var userFeed = new Instafeed({
  get: "user",
  target: "instafeed-container",
  resolution: "low_resolution",
  accessToken:
    "IGQVJYS05JQ3FINTJMT0EtM0NFRHoxbHZAsdjNiS0Rqa0xHTmFFUDFjMlBxbWQ4Ti1qa1lCcTZA3MWY5OERHNDlIVTlqeWpBcVZAxNEJQY29NYURaVkN4bE0yS1hiYkJ5U2JDN3FyUV9lSUlMZAFFWX3FVMQZDZD",
});
userFeed.run();
