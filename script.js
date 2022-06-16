var type = new Typed(".auto_type", {
    strings: ["Gaurab Sunar", "Creative Designer", "Font-End Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})
var skill = new Typed(".auto_type_skills", {
    strings: ["Skills"],
    typeSpeed: 100,
    backSpeed: 150,
    loop: true
})
var project = new Typed(".project_autotype", {
    strings: ["Project"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})

const banner = document.querySelector('.banner');
window.addEventListener('scroll', function () {
    const value = 620 - window.scrollY;
    banner.style.clipPath = "circle(" + value + "px at center center)";
})


let navigation = document.getElementById("nav_bar");
let hamburger = document.getElementById("hamburger")
hamburger.addEventListener("click", function () {
    console.log("clicked");
    if (navigation.style.display === "block") {
        // alert("make block");
        navigation.style.display = "none";
    }
    else {
        navigation.style.display = "block";
    }
})