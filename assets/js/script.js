'use strict';

// element toggle function
const elemToggleFunc = function (elem) { elem.classList.toggle("active"); }



// navbar variables
const navbar = document.querySelector("[data-navbar]");
const navbarOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarCloseBtn = document.querySelector("[data-nav-close-btn]");

navbarOpenBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});

navbarCloseBtn.addEventListener("click", function () {
  elemToggleFunc(navbar);
});



// go top variable
const goTopBtn = document.querySelector("[data-go-top]");

// window scroll event for go top button
window.addEventListener("scroll", function () {

  if (this.window.scrollY >= 500) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }

});

// ---- Character Modal Script Start ----
const modal = document.getElementById('character-modal');
const modalCharImage = document.getElementById('modal-char-image');
const modalCharName = document.getElementById('modal-char-char-name');
const modalCharBio = document.getElementById('modal-char-bio');
const closeModalBtn = document.getElementById('close-modal');

document.querySelectorAll('.character-item').forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const name = item.querySelector('p').textContent;
        const bio = item.getAttribute('data-bio');

        modalCharImage.src = img.src;
        modalCharImage.alt = name;
        modalCharName.textContent = name;
        modalCharBio.textContent = bio;

        modal.classList.remove('hidden');
        // Trigger animation after a small delay to allow rendering
        setTimeout(() => modal.querySelector('.animate-fade-in-down').style.animation = 'fadeInDown 0.3s ease-out forwards', 10);
    });
});

closeModalBtn.addEventListener('click', () => {
    const animatedEl = modal.querySelector('.animate-fade-in-down');
    animatedEl.style.animation = 'none';
    modal.classList.add('hidden');
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModalBtn.click();
    }
});
// ---- Character Modal Script End ----
// ---- Testimonial Carousel Script Start ----
const testimonialSlider = document.getElementById('testimonial-cards');
const testimonialDots = document.getElementById('testimonial-dots');
const prevBtn = document.getElementById('prev-testimonial');
const nextBtn = document.getElementById('next-testimonial');

let currentIndex = 0;
let totalItems = testimonialSlider.children.length;

// Create dots
for (let i = 0; i < totalItems; i++) {
    const dot = document.createElement('button');
    dot.className = 'w-2 h-2 rounded-full bg-gray-600 hover:bg-anitrain-orange transition-all';
    if (i === 0) dot.classList.add('bg-anitrain-orange', 'w-4');
    dot.addEventListener('click', () => goToSlide(i));
    testimonialDots.appendChild(dot);
}

function updateDots() {
    Array.from(testimonialDots.children).forEach((dot, index) => {
        dot.className = 'w-2 h-2 rounded-full bg-gray-600 hover:bg-anitrain-orange transition-all';
        if (index === currentIndex) {
            dot.classList.add('bg-anitrain-orange', 'w-4');
        }
    });
}

function goToSlide(index) {
    currentIndex = index;
    testimonialSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalItems;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems;
    goToSlide(currentIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Auto-play
let autoPlayInterval = setInterval(nextSlide, 5000);

// Pause on hover
testimonialSlider.closest('.relative').addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
testimonialSlider.closest('.relative').addEventListener('mouseleave', () => {
    autoPlayInterval = setInterval(nextSlide, 5000);
});
// ---- Testimonial Carousel Script End ----

// ---- Tabbed Feature Showcase Script Start ----
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const featureImage = document.getElementById('feature-image');

// Handle tab switching
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');

        // Remove active from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Hide all contents
        tabContents.forEach(content => content.classList.add('hidden'));

        // Activate selected tab
        button.classList.add('active');
        document.getElementById(targetTab).classList.remove('hidden');

        // Optional: Change image dynamically
        const images = {
            'workout-modes': 'https://placehold.co/600x400/262626/FF951A?text=Workout+Modes&font=Poppins ',
            'xp-system': 'https://placehold.co/600x400/262626/FF951A?text=XP+%26+Leveling&font=Poppins ',
            'beast-mode': 'https://placehold.co/600x400/262626/FF951A?text=Beast+Mode&font=Poppins ',
            'character-select': 'https://placehold.co/600x400/262626/FF951A?text=Character+Selection&font=Poppins '
        };

        if (featureImage) {
            featureImage.src = images[targetTab];
            featureImage.classList.remove('scale-100');
            void featureImage.offsetWidth; // Trigger reflow for animation
            featureImage.classList.add('scale-105');
            setTimeout(() => {
                featureImage.classList.remove('scale-105');
                featureImage.classList.add('scale-100');
            }, 300);
        }
    });
});
// ---- Tabbed Feature Showcase Script End ----

// ---- Animated Counter Script Start ----
const statsSection = document.getElementById('stats');
let hasAnimatedStats = false;

function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const speed = Math.max(20, 1000 - target); // Adjust animation speed based on number size

        let count = 0;
        const updateCounter = () => {
            const increment = target / speed;
            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.innerText = target.toLocaleString();
            }
        };
        updateCounter();
    });
}

window.addEventListener('scroll', () => {
    const statsPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight - 100;

    if (statsPos < screenPos && !hasAnimatedStats) {
        animateCounters();
        hasAnimatedStats = true;
    }
});
// ---- Animated Counter Script End ----
const characters = [
  { name: "Goku", img: "https://placehold.co/150x150/FF951A/FFF?text=Goku" },
  { name: "Naruto", img: "https://placehold.co/150x150/FF951A/FFF?text=Naruto" },
  { name: "Luffy", img: "https://placehold.co/150x150/FF951A/FFF?text=Luffy" },
  { name: "Saitama", img: "https://placehold.co/150x150/FF951A/FFF?text=Saitama" },
  { name: "Vegeta", img: "https://placehold.co/150x150/FF951A/FFF?text=Vegeta" },
  { name: "Ichigo", img: "https://placehold.co/150x150/FF951A/FFF?text=Ichigo" },
  { name: "Levi", img: "https://placehold.co/150x150/FF951A/FFF?text=Levi" },
  { name: "Tanjiro", img: "https://placehold.co/150x150/FF951A/FFF?text=Tanjiro" },
  { name: "Asta", img: "https://placehold.co/150x150/FF951A/FFF?text=Asta" },
  { name: "Deku", img: "https://placehold.co/150x150/FF951A/FFF?text=Deku" },
  { name: "Zoro", img: "https://placehold.co/150x150/FF951A/FFF?text=Zoro" },
  { name: "Gojo", img: "https://placehold.co/150x150/FF951A/FFF?text=Gojo" },
  { name: "Itachi", img: "https://placehold.co/150x150/FF951A/FFF?text=Itachi" },
  { name: "Killua", img: "https://placehold.co/150x150/FF951A/FFF?text=Killua" },
  { name: "Meliodas", img: "https://placehold.co/150x150/FF951A/FFF?text=Meliodas" },
];

const track = document.getElementById("auto-rotate-track");
const template = document.getElementById("character-template").content;

characters.forEach((char, i) => {
  const node = template.cloneNode(true);
  const img = node.querySelector("img");
  const name = node.querySelector("p");

  img.src = char.img;
  img.alt = char.name;
  name.textContent = char.name;

  const deg = (i % 3 - 1) * 10; // -10°, 0°, +10°
  const scale = 0.85 + Math.random() * 0.2;
  const offsetY = Math.random() * 10 - 5;

  img.style.transform = `rotate(${deg}deg) scale(${scale}) translateY(${offsetY}px)`;

  track.appendChild(node);
});
