/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("show")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a link */

document.querySelectorAll(".nav-link").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================
   DARK / LIGHT MODE
========================================= */

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.innerHTML =
        '<i class="fa-solid fa-sun"></i>';

}


themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light");

    const isLight =
        document.body.classList.contains("light");


    if (isLight) {

        localStorage.setItem(
            "portfolio-theme",
            "light"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-sun"></i>';

    } else {

        localStorage.setItem(
            "portfolio-theme",
            "dark"
        );

        themeBtn.innerHTML =
            '<i class="fa-solid fa-moon"></i>';

    }

});


/* =========================================
   TYPING EFFECT
========================================= */

const typingText =
    document.getElementById("typingText");

const words = [
    "web experiences.",
    "responsive websites.",
    "interactive interfaces.",
    "clean user interfaces."
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;


function typeWriter() {

    const word = words[wordIndex];

    if (!deleting) {

        typingText.textContent =
            word.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === word.length) {

            deleting = true;

            setTimeout(typeWriter, 1500);

            return;
        }

    } else {

        typingText.textContent =
            word.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    const speed = deleting ? 45 : 85;

    setTimeout(typeWriter, speed);

}

typeWriter();


/* =========================================
   PROJECT FILTER
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projects =
    document.querySelectorAll(".project-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        button.classList.add("active");

        const filter =
            button.dataset.filter;


        projects.forEach(project => {

            const category =
                project.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                project.classList.remove("hidden");

            } else {

                project.classList.add("hidden");

            }

        });

    });

});


/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION
========================================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 180;

        const sectionBottom =
            sectionTop + section.offsetHeight;


        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================================
   BACK TO TOP
========================================= */

const topBtn =
    document.getElementById("topBtn");


window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {

        topBtn.classList.add("show");

    } else {

        topBtn.classList.remove("show");

    }

});


topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* =========================================
   CONTACT → WHATSAPP
========================================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", event => {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const subject =
        document.getElementById("subject").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        !name ||
        !email ||
        !subject ||
        !message
    ) {

        formMessage.textContent =
            "Please complete all fields.";

        return;

    }


    /*
        IMPORTANT:
        Replace this number with your real
        WhatsApp number.

        Use international format.
        Example:
        2348012345678

        Do NOT include:
        +
        spaces
        brackets
    */

    const whatsappNumber =
        "234XXXXXXXXXX";


    const text =

        `Hello Abdurrahman,

` +
        `Name: ${name}

` +
        `Email: ${email}

` +
        `Subject: ${subject}

` +
        `Message:
${message}`;


    const whatsappURL =
        `https://wa.me/${whatsappNumber}?text=` +
        encodeURIComponent(text);


    formMessage.textContent =
        "Opening WhatsApp...";


    window.open(
        whatsappURL,
        "_blank"
    );

});


/* =========================================
   FOOTER YEAR
========================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();