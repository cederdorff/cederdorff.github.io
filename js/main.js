'use strict';

document.addEventListener("DOMContentLoaded", initTypedJs());

// ---------- typed.js ---------- //
function initTypedJs() {
  new Typed('.typed', {
    strings: ["Rasmus Cederdorff.", "a Freelancer.", "a Lecturer.", "a Web Developer.", "an App Developer.", "a Web Architect.", "a Teacher."],
    typeSpeed: 100,
    loop: true,
  });
};

// ---------- smooth scroll ---------- //

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("scrollTop").style.display = "block";
  } else {
    document.getElementById("scrollTop").style.display = "none";
  }
}

function scrollToTheTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}