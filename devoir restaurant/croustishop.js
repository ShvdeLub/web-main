var slideIndex = 0
slideshow()
function slideshow() {
    let index;
    let t = document.getElementById("slide")
    for (let index = 0; index < t.length; index++) {
        t[index].style.display = "none"

        
    }
    slideIndex++
    if (slideIndex > t.length) {
        slideIndex = 1
    }
    t[slideIndex-1].style.display = "block"
    setTimeout((slideshow), 500);
}
