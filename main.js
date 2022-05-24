// When the user scrolls down 500px from the top of the document, show the button
window.onscroll = function () {
    watchScroll();
};

function watchScroll() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        document.getElementById("scrollTop").style.display = "block";
    } else {
        document.getElementById("scrollTop").style.display = "none";
    }
}

function scrollToTheTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.querySelector("#scrollTop").addEventListener("click", scrollToTheTop);
