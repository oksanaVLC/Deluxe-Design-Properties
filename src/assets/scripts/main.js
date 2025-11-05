/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
// main.js
//import "animate.css";  ¿¿¿Aquí???

/**
 * Write any other JavaScript below
 */

/*+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();*/

// Menú hamburguesa
const menuBtn = document.querySelector(".header__menu-button");
const navigation = document.querySelector(".header__navigation");
const logoBlack = document.querySelector(".header__logo--black"); // mi logo negro

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
  logoBlack.classList.toggle("active"); // mostrar/ocultar logo negro
});

// Cerrar el menú al hacer clic en un enlace
const navLinks = document.querySelectorAll(".header__navigation-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    navigation.classList.remove("active");
    logoBlack.classList.remove("active"); // ocultar logo negro
  });
});

// Slider
const btns = document.querySelectorAll(".slider__nav-btn");
const slides = document.querySelectorAll(".home__video");
const contents = document.querySelectorAll(".home__content");

var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("slider__nav-btn--active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("home__video--active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("slider__nav-btn--active");
  slides[manual].classList.add("home__video--active");
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

// Simple handler para demo (envío falso)
const contactForm = document.getElementById("contactForm");
const toast = document.getElementById("contactToast");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const name = formData.get("name")?.trim();
    const email = formData.get("email")?.trim();
    const message = formData.get("message")?.trim();

    // validación mínima
    if (!name || !email || !message) {
      // Puedes mostrar un mensaje de error más elegante aquí
      alert("Rellena nombre, email y mensaje, por favor.");
      return;
    }

    // Simular envío
    contactForm.reset();
    toast.classList.remove("visually-hidden");
    setTimeout(() => {
      toast.classList.add("visually-hidden");
    }, 3500);
  });
}

/******* Antés y despúes */

function initComparisons() {
  var x, i;
  /*find all elements with an "overlay" class:*/
  x = document.getElementsByClassName("img-comp-overlay");
  for (i = 0; i < x.length; i++) {
    /*once for each "overlay" element:
    pass the "overlay" element as a parameter when executing the compareImages function:*/
    compareImages(x[i]);
  }
  function compareImages(img) {
    var slider,
      img,
      clicked = 0,
      w,
      h;
    /*get the width and height of the img element*/
    w = img.offsetWidth;
    h = img.offsetHeight;
    /*set the width of the img element to 50%:*/
    img.style.width = w / 2 + "px";
    /*create slider:*/
    slider = document.createElement("DIV");
    slider.setAttribute("class", "img-comp-slider");
    /*insert slider*/
    img.parentElement.insertBefore(slider, img);
    /*position the slider in the middle:*/
    slider.style.top = h / 2 - slider.offsetHeight / 2 + "px";
    slider.style.left = w / 2 - slider.offsetWidth / 2 + "px";
    /*execute a function when the mouse button is pressed:*/
    slider.addEventListener("mousedown", slideReady);
    /*and another function when the mouse button is released:*/
    window.addEventListener("mouseup", slideFinish);
    /*or touched (for touch screens:*/
    slider.addEventListener("touchstart", slideReady);
    /*and released (for touch screens:*/
    window.addEventListener("touchend", slideFinish);
    function slideReady(e) {
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*the slider is now clicked and ready to move:*/
      clicked = 1;
      /*execute a function when the slider is moved:*/
      window.addEventListener("mousemove", slideMove);
      window.addEventListener("touchmove", slideMove);
    }
    function slideFinish() {
      /*the slider is no longer clicked:*/
      clicked = 0;
    }
    function slideMove(e) {
      var pos;
      /*if the slider is no longer clicked, exit this function:*/
      if (clicked == 0) return false;
      /*get the cursor's x position:*/
      pos = getCursorPos(e);
      /*prevent the slider from being positioned outside the image:*/
      if (pos < 0) pos = 0;
      if (pos > w) pos = w;
      /*execute a function that will resize the overlay image according to the cursor:*/
      slide(pos);
    }
    function getCursorPos(e) {
      var a,
        x = 0;
      e = e.changedTouches ? e.changedTouches[0] : e;
      /*get the x positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x coordinate, relative to the image:*/
      x = e.pageX - a.left;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      return x;
    }
    function slide(x) {
      /*resize the image:*/
      img.style.width = x + "px";
      /*position the slider:*/
      slider.style.left = img.offsetWidth - slider.offsetWidth / 2 + "px";
    }
  }
}
initComparisons();

/* Entorno cambia el bg */
const card = document.getElementById("entornoCard");
const container = document.querySelector(".holographic-container");

if (card && container) {
  card.addEventListener("click", () => {
    container.classList.toggle("changed");
  });
} else {
  console.warn("No se encontró #entornoCard o .holographic-container");
}
