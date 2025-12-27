/**
 * Sandesh Acharya Portfolio - Main JavaScript
 * Professional multi-page portfolio with email functionality
 */

document.addEventListener('DOMContentLoaded', function() {
    // Initialize mobile menu
    initMobileMenu();
    
    // Initialize contact form if on contact page
    if (document.getElementById('contactForm')) {
        initContactForm();
    }
    
    // Add smooth scrolling to all internal links
    initSmoothScrolling();
});

// Mobile Menu Toggle
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // Change icon
            const icon = this.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.nav-content') && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }
}

// Smooth Scrolling for internal links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Contact Form with EmailJS Integration
// Contact Form with EmailJS Integration
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    // Load EmailJS library dynamically — NO TRAILING SPACES
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.onload = function() {
        // ✅ CORRECT PUBLIC KEY FROM YOUR DASHBOARD
        emailjs.init('6vhygQ499Kzrohv5c');
    };
    document.head.appendChild(script);
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Trim values to avoid whitespace issues
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = (document.getElementById('subject').value || 'Message from Portfolio').trim();
        const message = document.getElementById('message').value.trim();
        
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        const templateParams = {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'sandeshacharya471@gmail.com'
        };
        
        // ✅ CORRECT SERVICE & TEMPLATE IDs
        emailjs.send('service_q8y79jn', 'template_7y4x0vq', templateParams)
            .then(function(response) {
                console.log('✅ Success:', response);
                showMessage('Thank you! Your message has been sent. I’ll get back to you soon.', 'success');
                contactForm.reset();
            })
            .catch(function(error) {
                console.error('❌ Error:', error);
                showMessage('Sorry, something went wrong. Please try again or email me directly at sandeshacharya471@gmail.com.', 'error');
            })
            .finally(function() {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            });
    });
    
    function showMessage(text, type) {
        const msg = document.getElementById('formMessage');
        msg.textContent = text;
        msg.style.display = 'block';
        msg.style.backgroundColor = type === 'success' ? '#d1fae5' : '#fee2e2';
        msg.style.color = type === 'success' ? '#065f46' : '#991b1b';
        msg.style.border = `1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'}`;
        setTimeout(() => { msg.style.display = 'none'; }, 5000);
    }
    
    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
}

// Alternative Email Solution using Formspree (if you prefer)
function initContactFormFormspree() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'Portfolio Contact';
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Prepare form data for Formspree
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('subject', subject);
        formData.append('message', message);
        formData.append('_replyto', email);
        formData.append('_subject', subject);
        
        // Send to Formspree (replace with your Formspree form ID)
        // FIXED: Removed trailing space in URL
        fetch('https://formspree.io/f/your-form-id-here', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon.', 'success');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            showMessage('Sorry, there was an error. Please email me directly at sandeshacharya471@gmail.com', 'error');
        })
        .finally(() => {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = type === 'success' ? '#d1fae5' : '#fee2e2';
        formMessage.style.color = type === 'success' ? '#065f46' : '#991b1b';
        formMessage.style.border = `1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'}`;
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

// Simple Form Validation (if you don't want to use email services)
function initContactFormSimple() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value || 'Portfolio Contact';
        const message = document.getElementById('message').value;
        
        // Validate form
        if (!name || !email || !message) {
            showMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        if (!validateEmail(email)) {
            showMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate sending (for demo purposes)
        setTimeout(() => {
            // In real implementation, this would send to your email
            // For now, show success message
            console.log('Message details:', { name, email, subject, message });
            
            showMessage(`DEMO: Message would be sent to sandeshacharya471@gmail.com. Name: ${name}, Email: ${email}, Message: ${message}`, 'success');
            contactForm.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 1500);
    });
    
    function showMessage(text, type) {
        formMessage.textContent = text;
        formMessage.style.display = 'block';
        formMessage.style.backgroundColor = type === 'success' ? '#d1fae5' : '#fee2e2';
        formMessage.style.color = type === 'success' ? '#065f46' : '#991b1b';
        formMessage.style.border = `1px solid ${type === 'success' ? '#a7f3d0' : '#fecaca'}`;
        
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }
    
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
}

// Choose which contact form function to use:
// 1. initContactForm() - Uses EmailJS (requires setup) → CURRENTLY ACTIVE
// 2. initContactFormFormspree() - Uses Formspree (requires setup)
// 3. initContactFormSimple() - Simple demo version (no email sending)

// For immediate use without setup, use the simple version:
// Replace line 12 with: initContactFormSimple();