// ==========================
// Scroll To Top Button
// ==========================

const topBtn = document.getElementById("topBtn");

if (topBtn) {
    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    });

    topBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}

// ==========================
// Dark Mode
// ==========================

const themeBtn = document.getElementById("themeBtn");

if (themeBtn) {

    themeBtn.onclick = function () {

        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            themeBtn.innerHTML = "☀️";
        } else {
            themeBtn.innerHTML = "🌙";
        }

    };

}

// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".counter");

if (counters.length > 0) {

    counters.forEach(counter => {

        const updateCounter = () => {

            const target = +counter.dataset.target;
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

}

// ==========================
// Mobile Menu
// ==========================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

    });

}

// ==========================
// Scroll Animation
// ==========================

const hiddenElements = document.querySelectorAll(
".about,.services,.pricing,.contact,.hero,.portfolio,.testimonials"
);

if (hiddenElements.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    });

    hiddenElements.forEach(el => {

        el.classList.add("hidden");

        observer.observe(el);

    });

}

// ==========================
// Testimonial Slider
// ==========================

const testimonials = document.querySelectorAll(".testimonial");

if (testimonials.length > 0) {

    let current = 0;

    setInterval(() => {

        testimonials[current].classList.remove("active");

        current++;

        if (current >= testimonials.length) {

            current = 0;

        }

        testimonials[current].classList.add("active");

    }, 3000);

}

// ==========================
// EmailJS Contact Form
// ==========================

if (typeof emailjs !== "undefined") {

    emailjs.init("v0eoWPk-0Zt4FB7N9");

    const form = document.getElementById("contact-form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            emailjs.sendForm(
                "service_81c7u1r",
                "template_v563qkk",
                this
            )

            .then(function () {

                alert("✅ Message Sent Successfully!");

                form.reset();

            })

            .catch(function (error) {

                console.log(error);

                alert("❌ Failed to send message.");

            });

        });

    }

}

// ==========================
// Loader
// ==========================

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    if (loader) {

        setTimeout(function () {

            loader.style.display = "none";

        }, 1000);

    }

});
const words = [
    "Website Developer",
    "UI/UX Designer",
    "Business Solutions",
    "Digital Marketing"
];

let i = 0;
let j = 0;
let current = "";
let isDeleting = false;

function type() {

    current = words[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML =
            current.substring(0, j++);

        if (j > current.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }

    } else {

        document.getElementById("typing").innerHTML =
            current.substring(0, j--);

        if (j < 0) {
            isDeleting = false;
            i++;

            if (i >= words.length) i = 0;
        }

    }

    setTimeout(type, isDeleting ? 60 : 120);

}

type();
// Scroll Progress Bar

window.addEventListener("scroll", function () {

    const winScroll =
        document.documentElement.scrollTop ||
        document.body.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width =
        scrolled + "%";

});

// Navbar Blur on Scroll

window.addEventListener("scroll", function () {

    const nav = document.querySelector("nav");

    if (window.scrollY > 50) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});
// Premium Loader

window.addEventListener("load", function () {

    const loader = document.getElementById("loader");

    loader.style.opacity = "0";

    setTimeout(() => {

        loader.style.display = "none";

    }, 800);

});
// Newsletter Form

const newsletter = document.querySelector(".newsletter-form");

if (newsletter) {

    newsletter.addEventListener("submit", function(e){

        e.preventDefault();

        alert("✅ Thank you for subscribing!");

        newsletter.reset();

    });

}
// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

    });

});
// Scroll Progress Bar

window.addEventListener("scroll", () => {

    const scrollTop = document.documentElement.scrollTop;

    const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const progress = (scrollTop / scrollHeight) * 100;

    document.getElementById("progressBar").style.width =
        progress + "%";

});
// Quote Form

const quoteForm = document.getElementById("quoteForm");

if(quoteForm){

quoteForm.addEventListener("submit",function(e){

e.preventDefault();

alert("✅ Your quote request has been submitted.");

quoteForm.reset();

});

}
// Portfolio Filter

const filterBtns = document.querySelectorAll(".filter-btn");
const portfolioItems = document.querySelectorAll(".portfolio-item");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const filter = btn.dataset.filter;

portfolioItems.forEach(item=>{

if(filter==="all" || item.classList.contains(filter)){

item.style.display="block";

}else{

item.style.display="none";

}

});

});

});
function calculatePrice(){

let total =
Number(document.getElementById("websiteType").value);

document.querySelectorAll(".check input:checked")
.forEach(item=>{

total += Number(item.value);

});

document.getElementById("totalPrice").innerHTML =
"₹" + total.toLocaleString("en-IN");

}
const colors = document.querySelectorAll(".color");

colors.forEach(color => {

    color.addEventListener("click", () => {

        const selected = color.dataset.color;

        document.documentElement.style.setProperty(
            "--primary",
            selected
        );

        localStorage.setItem("themeColor", selected);

    });

});

const savedColor = localStorage.getItem("themeColor");

if(savedColor){

document.documentElement.style.setProperty(
"--primary",
savedColor
);

}