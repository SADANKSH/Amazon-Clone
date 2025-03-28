// Amazon Sign-in Page Animations and Interactions

document.addEventListener('DOMContentLoaded', () => {
    // Animation for header and logo
    const header = document.querySelector('header');
    const logo = document.querySelector('.logo');
    
    // Fade in header and logo
    setTimeout(() => {
        header.classList.add('visible');
        logo.classList.add('visible');
    }, 200);
    
    // Animate login box appearance with slight delay
    const loginBox = document.querySelector('.loginbox');
    setTimeout(() => {
        loginBox.classList.add('appear');
    }, 400);
    
    // Focus on input fields with highlight effect
    const inputFields = document.querySelectorAll('input');
    inputFields.forEach(input => {
        input.addEventListener('focus', () => {
            input.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', () => {
            if (input.value.trim() === '') {
                input.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Button hover and click effects
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('mouseover', () => {
            button.classList.add('hover');
        });
        
        button.addEventListener('mouseout', () => {
            button.classList.remove('hover');
        });
        
        button.addEventListener('mousedown', () => {
            button.classList.add('active');
        });
        
        button.addEventListener('mouseup', () => {
            button.classList.remove('active');
        });
    });
    
    // Validate email input
    const emailInput = document.querySelector('.inputbox input');
    const continueButton = document.querySelector('.Util button');
    
    continueButton.addEventListener('click', (e) => {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            shake(emailInput.parentElement);
            emailInput.parentElement.classList.add('error');
            e.preventDefault();
        } else {
            emailInput.parentElement.classList.remove('error');
            animateButton(continueButton);
        }
    });
    
    // Password field visualization toggle with eye icon
    const passwordField = document.querySelector('.pass1 input');
    const passwordContainer = document.querySelector('.pass1');
    
    // Create password toggle element using an eye icon
    const passwordToggle = document.createElement('span');
    passwordToggle.className = 'password-toggle';
    passwordToggle.innerHTML = '<i class="eye-icon eye-closed"></i>';
    passwordContainer.appendChild(passwordToggle);
    
    passwordToggle.addEventListener('click', () => {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            passwordToggle.innerHTML = '<i class="eye-icon eye-open"></i>';
        } else {
            passwordField.type = 'password';
            passwordToggle.innerHTML = '<i class="eye-icon eye-closed"></i>';
        }
    });
    
    // Utility functions for animations
    function shake(element) {
        element.classList.add('shake');
        setTimeout(() => {
            element.classList.remove('shake');
        }, 600);
    }
    
    function animateButton(button) {
        button.classList.add('clicked');
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 300);
    }
}); 