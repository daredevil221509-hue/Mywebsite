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