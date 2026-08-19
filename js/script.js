// ======================================================
// SHANTHI PORTFOLIO - JAVASCRIPT
// ======================================================

document.addEventListener("DOMContentLoaded", () => {

// ==================================================
// 1. LUCIDE ICONS
// ==================================================

if (typeof lucide !== "undefined") {
    lucide.createIcons();
}


// ==================================================
// 2. TYPING ANIMATION
// ==================================================

const typingText =
    document.getElementById("typingText");

const roles = [
    "Full Stack Developer",
    "Java Developer",
    "AI Enthusiast",
    "CSIT Student"
];

let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {

    if (!typingText) return;

    const currentRole =
        roles[roleIndex];

    if (!isDeleting) {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex + 1
            );

        charIndex++;

        if (
            charIndex ===
            currentRole.length
        ) {

            isDeleting = true;

            setTimeout(
                typeEffect,
                1800
            );

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(
                0,
                charIndex - 1
            );

        charIndex--;

        if (charIndex === 0) {

            isDeleting = false;

            roleIndex =
                (roleIndex + 1) %
                roles.length;
        }
    }

    setTimeout(
        typeEffect,
        isDeleting ? 50 : 100
    );
}

typeEffect();


// ==================================================
// 3. MOBILE MENU
// ==================================================

const menuBtn =
    document.getElementById("menuBtn");

const mobileMenu =
    document.getElementById("mobileMenu");


if (
    menuBtn &&
    mobileMenu
) {

    menuBtn.addEventListener(
        "click",
        () => {

            mobileMenu.classList.toggle(
                "hidden"
            );

            const isOpen =
                !mobileMenu.classList.contains(
                    "hidden"
                );

            menuBtn.setAttribute(
                "aria-expanded",
                isOpen
            );

        }
    );
}


// Close mobile menu when link is clicked

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link"
    );


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            if (mobileMenu) {

                mobileMenu.classList.add(
                    "hidden"
                );

            }

            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );

});


// ==================================================
// 4. NAVBAR SCROLL EFFECT
// ==================================================

const navbar =
    document.getElementById("navbar");


function updateNavbar() {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.classList.add(
            "navbar-scrolled"
        );

    } else {

        navbar.classList.remove(
            "navbar-scrolled"
        );

    }
}


window.addEventListener(
    "scroll",
    updateNavbar
);


updateNavbar();


// ==================================================
// 5. DARK / LIGHT MODE
// ==================================================

const themeToggle =
    document.getElementById(
        "themeToggle"
    );

const mobileTheme =
    document.getElementById(
        "mobileTheme"
    );

const themeIcon =
    document.getElementById(
        "themeIcon"
    );


function updateThemeIcon() {

    const lightMode =
        document.body.classList.contains(
            "light-mode"
        );


    if (themeIcon) {

        themeIcon.setAttribute(
            "data-lucide",
            lightMode
                ? "moon"
                : "sun"
        );

    }


    if (
        typeof lucide !== "undefined"
    ) {

        lucide.createIcons();

    }
}


function toggleTheme() {

    document.body.classList.toggle(
        "light-mode"
    );


    const isLight =
        document.body.classList.contains(
            "light-mode"
        );


    localStorage.setItem(
        "theme",
        isLight
            ? "light"
            : "dark"
    );


    updateThemeIcon();

}


// Desktop theme button

if (themeToggle) {

    themeToggle.addEventListener(
        "click",
        toggleTheme
    );

}


// Mobile theme button

if (mobileTheme) {

    mobileTheme.addEventListener(
        "click",
        toggleTheme
    );

}


// Load saved theme

const savedTheme =
    localStorage.getItem(
        "theme"
    );


if (savedTheme === "light") {

    document.body.classList.add(
        "light-mode"
    );

}


updateThemeIcon();


// ==================================================
// 6. PROJECT FILTER
// ==================================================

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                // Remove active state

                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                // Add active state

                button.classList.add(
                    "active"
                );


                const filter =
                    button.getAttribute(
                        "data-filter"
                    );


                // Filter projects

                projectCards.forEach(
                    card => {

                        const categories =
                            card.getAttribute(
                                "data-category"
                            ) || "";


                        const categoryList =
                            categories.split(
                                " "
                            );


                        if (
                            filter === "all" ||
                            categoryList.includes(
                                filter
                            )
                        ) {

                            card.classList.remove(
                                "project-hidden"
                            );

                        } else {

                            card.classList.add(
                                "project-hidden"
                            );

                        }

                    }
                );

            }
        );

    }
);


// ==================================================
// 7. CONTACT FORM
// ==================================================

const contactForm =
    document.getElementById(
        "contactForm"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            // Get form fields

            const name =
                document.getElementById(
                    "name"
                )?.value.trim();


            const email =
                document.getElementById(
                    "email"
                )?.value.trim();


            const subject =
                document.getElementById(
                    "subject"
                )?.value.trim();


            const message =
                document.getElementById(
                    "message"
                )?.value.trim();


            // Validate fields

            if (
                !name ||
                !email ||
                !subject ||
                !message
            ) {

                alert(
                    "Please fill in all fields."
                );

                return;

            }


            // Basic email validation

            const emailPattern =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (
                !emailPattern.test(
                    email
                )
            ) {

                alert(
                    "Please enter a valid email address."
                );

                return;

            }


            // ==================================================
            // YOUR EMAIL ADDRESS
            // ==================================================

            const receiver =
                "kalyanamshanthipriya021@gmail.com";


            // Email subject

            const mailSubject =
                encodeURIComponent(
                    subject
                );


            // Email body

            const mailBody =
                encodeURIComponent(

`Hello Shanthi,

You have received a new message from your portfolio website.

Name: ${name}

Email: ${email}

Message:
${message}

---

Sent from Shanthi's Portfolio
`
);


            // Create mailto URL

            const mailto =
                `mailto:${receiver}` +
                `?subject=${mailSubject}` +
                `&body=${mailBody}`;


            // Open email application

            window.location.href =
                mailto;

        }
    );

}


// ==================================================
// 8. CURRENT YEAR
// ==================================================

const yearElement =
    document.getElementById(
        "year"
    );


if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ==================================================
// 9. SCROLL REVEAL ANIMATION
// ==================================================

const revealElements =
    document.querySelectorAll(
        ".skill-card, .project-card, .glass-card"
    );


if (
    "IntersectionObserver"
    in window
) {

    const observer =
        new IntersectionObserver(
            (
                entries,
                observerInstance
            ) => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.classList.add(
                                "animate-fade-up"
                            );


                            entry.target.style.opacity =
                                "1";


                            observerInstance.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        element => {

            element.style.opacity =
                "0";

            observer.observe(
                element
            );

        }
    );

} else {

    // Fallback

    revealElements.forEach(
        element => {

            element.style.opacity =
                "1";

        }
    );

}


// ==================================================
// 10. ACTIVE NAVIGATION
// ==================================================

const sections =
    document.querySelectorAll(
        "section[id]"
    );


const navLinks =
    document.querySelectorAll(
        ".nav-link"
    );


function updateActiveNavigation() {

    let currentSection =
        "";


    sections.forEach(
        section => {

            const sectionTop =
                section.offsetTop - 150;


            const sectionHeight =
                section.offsetHeight;


            if (
                window.scrollY >=
                sectionTop
                &&
                window.scrollY <
                sectionTop +
                sectionHeight
            ) {

                currentSection =
                    section.getAttribute(
                        "id"
                    );

            }

        }
    );


    navLinks.forEach(
        link => {

            link.classList.remove(
                "text-purple-400"
            );


            const href =
                link.getAttribute(
                    "href"
                );


            if (
                href ===
                `#${currentSection}`
            ) {

                link.classList.add(
                    "text-purple-400"
                );

            }

        }
    );

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


updateActiveNavigation();


// ==================================================
// 11. SMOOTH SCROLL
// ==================================================

document.querySelectorAll(
    'a[href^="#"]'
).forEach(
    anchor => {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute(
                        "href"
                    );


                if (
                    !targetId ||
                    targetId === "#"
                ) {

                    return;

                }


                const target =
                    document.querySelector(
                        targetId
                    );


                if (target) {

                    event.preventDefault();


                    target.scrollIntoView(
                        {
                            behavior:
                                "smooth",

                            block:
                                "start"
                        }
                    );

                }

            }
        );

    }
);


// ==================================================
// 12. BUTTON RIPPLE EFFECT
// ==================================================

const rippleButtons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn"
    );


rippleButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function (event) {

                const ripple =
                    document.createElement(
                        "span"
                    );


                ripple.classList.add(
                    "ripple"
                );


                const rect =
                    this.getBoundingClientRect();


                ripple.style.left =
                    `${
                        event.clientX -
                        rect.left
                    }px`;


                ripple.style.top =
                    `${
                        event.clientY -
                        rect.top
                    }px`;


                this.appendChild(
                    ripple
                );


                setTimeout(
                    () => {

                        ripple.remove();

                    },
                    600
                );

            }
        );

    }
);


// ==================================================
// 13. ESCAPE KEY
// ==================================================

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key ===
            "Escape"
        ) {

            if (mobileMenu) {

                mobileMenu.classList.add(
                    "hidden"
                );

            }


            if (menuBtn) {

                menuBtn.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }

    }
);


// ==================================================
// 14. PREVENT EMPTY PROJECT LINKS
// ==================================================

document.querySelectorAll(
    '.project-link[href="#"]'
).forEach(
    link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

                alert(
                    "Project link will be added soon."
                );

            }
        );

    }
);


// ==================================================
// 15. CONSOLE MESSAGE
// ==================================================

console.log(
    "%cWelcome to Shanthi's Portfolio 🚀",
    "color: #a855f7; font-size: 18px; font-weight: bold;"
);


console.log(
    "Built with HTML, Tailwind CSS and JavaScript."
);


});
