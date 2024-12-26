.contact-details a:hover {
    text-decoration: underline;
}      const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.toggle('dark', savedTheme === 'dark');
}

// Toggle the theme
themeToggleButton.addEventListener('click', () => {
    const isDark = body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});
if (savedTheme === 'dark') {
    body.classList.add('dark');
} else {
    body.classList.remove('dark');
}

// Toggle theme between dark and light
themeToggleButton.addEventListener('click', () => {
    body.classList.toggle('dark');
    
    // Save the theme preference in localStorage
    if (body.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const typewriterText = document.getElementById('typewriter');
    const textContent = "I'm a Caregiver"; // Text to be typed
    const delay = 150; // Speed of typing
    const eraseDelay = 500; // Delay before erasing
    const repeatDelay = 1000; // Delay before restarting effect

    let index = 0;
    let isDeleting = false;

    function typeText() {
        if (isDeleting) {
            // Erasing the text
            typewriterText.textContent = textContent.substring(0, index);
            index--;

            if (index === 0) {
                isDeleting = false;
                setTimeout(typeText, repeatDelay);
            }
        } else {
            // Typing the text
            typewriterText.textContent = textContent.substring(0, index);
            index++;

            if (index === textContent.length) {
                isDeleting = true;
                setTimeout(typeText, eraseDelay);
            }
        }

        // Call the typing function again after a delay
        setTimeout(typeText, isDeleting ? delay : delay);
    }

    typeText(); // Initiate typing effect
});


// Mobile responsiveness adjustments
const mediaQuery = window.matchMedia('(max-width: 768px)');

function handleMobileView() {
    const logo = document.querySelector('.logo');
    const navLinks = document.querySelector('.nav-links');

    if (mediaQuery.matches) {
        // Mobile view: Stacked logo and links, menu icon can be added here if needed
        navLinks.style.display = 'none';
        logo.style.fontSize = '1.5rem'; // Adjust logo size for mobile view
    } else {
        // Desktop view: Horizontal layout
        navLinks.style.display = 'flex';
        logo.style.fontSize = '2rem'; // Default logo size
    }
}

// Call the function initially and whenever the window is resized
handleMobileView();
mediaQuery.addListener(handleMobileView); 