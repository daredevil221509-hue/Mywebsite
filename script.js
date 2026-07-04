// Scroll Button

let mybutton = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        mybutton.style.display = "block";

    } else {

        mybutton.style.display = "none";

    }

};

function topFunction(){

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
const themeBtn = document.getElementById("themeBtn");

themeBtn.onclick = function(){

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        themeBtn.innerHTML="🌞";
    }else{
        themeBtn.innerHTML="🌙";
    }

}
// Animated Counter

const counters = document.querySelectorAll(".counter");

counters.forEach(counter => {

    const updateCounter = () => {

        const target = +counter.getAttribute("data-target");

        const count = +counter.innerText;

        const increment = Math.ceil(target / 100);

        if (count < target) {

            counter.innerText = count + increment;

            setTimeout(updateCounter, 20);

        } else {

            counter.innerText = target + "+";

        }

    };

    updateCounter();

});
// Mobile Menu

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function(){

    navLinks.classList.toggle("active");

});
// Scroll Animation

const hiddenElements = document.querySelectorAll(
".about,.services,.pricing,.contact,.hero"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});