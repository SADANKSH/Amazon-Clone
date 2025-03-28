// Amazon Homepage Interactive Features

document.addEventListener('DOMContentLoaded', () => {
    // Initialize carousel functionality
    initCarousel();
    
    // Simulate hover effects for touch devices
    initTouchHover();
    
    // Handle "Back to top" functionality
    initBackToTop();
    
    // Add click handler to product cards
    initProductCards();

    // Animation for the login box on the signin page
    const loginBox = document.querySelector('.loginbox');
    if (loginBox) {
        loginBox.style.opacity = 0;
        loginBox.style.transition = 'opacity 1s';
        setTimeout(() => {
            loginBox.style.opacity = 1;
        }, 500);
    }

    // Animation for the navbar on the index page
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        navbar.style.transform = 'translateY(-100px)';
        navbar.style.transition = 'transform 0.5s';
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)';
        }, 300);
    }

    // Animation for the search input on the index page
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('focus', () => {
            searchInput.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.style.boxShadow = 'none';
        });
    }
});

// Carousel functionality
function initCarousel() {
    const carouselItems = document.querySelector('.carousel-items');
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    
    if (!carouselItems || !prevButton || !nextButton) return;
    
    // Set initial state - hide prev button
    prevButton.style.display = 'none';
    
    // Scroll amount for each click (item width + margin)
    const scrollAmount = 190;
    
    // Handle next button click
    nextButton.addEventListener('click', () => {
        carouselItems.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        
        // Show prev button once scrolled
        setTimeout(() => {
            prevButton.style.display = 'flex';
            
            // Hide next button if at end
            if (carouselItems.scrollLeft + carouselItems.clientWidth >= carouselItems.scrollWidth - 10) {
                nextButton.style.display = 'none';
            }
        }, 300);
    });
    
    // Handle prev button click
    prevButton.addEventListener('click', () => {
        carouselItems.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        
        // Show next button
        setTimeout(() => {
            nextButton.style.display = 'flex';
            
            // Hide prev button if at start
            if (carouselItems.scrollLeft <= 10) {
                prevButton.style.display = 'none';
            }
        }, 300);
    });
    
    // Update buttons visibility on scroll
    carouselItems.addEventListener('scroll', () => {
        // Near the start - hide prev button
        if (carouselItems.scrollLeft <= 10) {
            prevButton.style.display = 'none';
        } else {
            prevButton.style.display = 'flex';
        }
        
        // Near the end - hide next button
        if (carouselItems.scrollLeft + carouselItems.clientWidth >= carouselItems.scrollWidth - 10) {
            nextButton.style.display = 'none';
        } else {
            nextButton.style.display = 'flex';
        }
    });
}

// Touch device hover simulation
function initTouchHover() {
    // For mobile devices, add hover effects on tap
    if ('ontouchstart' in window) {
        const hoverElements = document.querySelectorAll('.border');
        
        hoverElements.forEach(element => {
            element.addEventListener('touchstart', () => {
                // Remove hover class from all elements
                hoverElements.forEach(el => el.classList.remove('hover-active'));
                // Add hover class to the touched element
                element.classList.add('hover-active');
            });
        });
        
        // Add global event listener to remove hover effects
        document.addEventListener('touchstart', (e) => {
            // If touch is outside any hover element, remove all hover effects
            if (!e.target.closest('.border')) {
                hoverElements.forEach(el => el.classList.remove('hover-active'));
            }
        });
    }
}

// Back to top functionality
function initBackToTop() {
    const backToTopLink = document.querySelector('.back-to-top a');
    
    if (!backToTopLink) return;
    
    backToTopLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Product card click functionality
function initProductCards() {
    const productCards = document.querySelectorAll('.product-card');
    if (!productCards.length) return;
    
    productCards.forEach(card => {
        card.addEventListener('click', (e) => {
            // Don't navigate if clicking on the "See more" link directly
            if (e.target.classList.contains('card-link')) return;
            
            // Find the "See more" link in this card and navigate to its href
            const link = card.querySelector('.card-link');
            if (link && link.href) {
                window.location.href = link.href;
            }
        });
    });
}