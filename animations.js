import { animate, inView, stagger } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm";

document.addEventListener("DOMContentLoaded", () => {
    // Disable the old CSS-based IntersectionObserver logic if it exists
    document.querySelectorAll('.reveal').forEach(el => {
        el.classList.remove('reveal');
        el.classList.add('motion-reveal');
        // Initial state
        el.style.opacity = '0';
        el.style.transform = 'translateY(40px)';
    });

    // 1. General Reveal Animation (Scroll-driven)
    inView(".motion-reveal", (info) => {
        animate(info.target, 
            { opacity: [0, 1], transform: ["translateY(40px)", "translateY(0px)"] },
            { duration: 0.8, easing: [0.17, 0.55, 0.55, 1] }
        );
    }, { margin: "-50px" });

    // 2. Staggered Animations for Grids
    // Stat items in Hero
    const statGrid = document.querySelector(".stat-grid");
    if (statGrid) {
        const statItems = statGrid.querySelectorAll(".stat-item");
        statItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.8)';
        });
        inView(".stat-grid", () => {
            animate(statItems, 
                { opacity: [0, 1], transform: ["scale(0.8)", "scale(1)"] },
                { delay: stagger(0.1), duration: 0.6, easing: [0.34, 1.56, 0.64, 1] } // Spring-like easing
            );
        });
    }

    // Quick Nav Items
    const quickNav = document.querySelector(".quick-nav");
    if (quickNav) {
        const qnItems = quickNav.querySelectorAll(".qn-item");
        qnItems.forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
        });
        inView(".quick-nav", () => {
            animate(qnItems, 
                { opacity: [0, 1], transform: ["translateY(30px)", "translateY(0px)"] },
                { delay: stagger(0.1), duration: 0.7, easing: [0.17, 0.55, 0.55, 1] }
            );
        });
    }

    // 3. Navbar scroll effect (Glassmorphism gets stronger on scroll)
    const nav = document.querySelector("nav");
    if (nav) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                nav.style.background = "rgba(255, 255, 255, 0.85)";
                nav.style.boxShadow = "0 4px 20px rgba(4, 47, 46, 0.08)";
            } else {
                nav.style.background = "rgba(255, 255, 255, 0.6)";
                nav.style.boxShadow = "0 2px 4px rgba(4, 47, 46, 0.04)";
            }
        });
    }
});
