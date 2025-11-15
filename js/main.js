// ================================
// NETFLIX-THEMED PORTFOLIO JS
// ================================

// ===== NETFLIX LOADER =====
window.addEventListener('load', () => {
    const loader = document.getElementById('netflixLoader');

    setTimeout(() => {
        loader.classList.add('fade-out');
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }, 2000);
});

// ===== TYPEWRITER EFFECT =====
const typewriterElement = document.getElementById('typewriter');
if (typewriterElement) {
    const phrases = [
        'Transforming Ideas into AI Solutions',
        'Building Intelligent Systems at IBM',
        'Innovating with Machine Learning & GenAI',
        'Creating Impact Through Technology'
    ];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];

        if (isDeleting) {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            // Pause at end of phrase
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500;
        }

        setTimeout(typeWriter, typingSpeed);
    }

    // Start typewriter effect after loader
    setTimeout(typeWriter, 2500);
}

// ===== COUNTER ANIMATIONS =====
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };

    updateCounter();
}

// Observe counters
const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            entry.target.classList.add('counted');
            animateCounter(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ===== CIRCULAR PROGRESS RING ANIMATIONS =====
function animateProgressRing(circle) {
    const progress = parseInt(circle.getAttribute('data-progress'));
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;

    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    circle.style.strokeDashoffset = circumference;

    const offset = circumference - (progress / 100) * circumference;

    setTimeout(() => {
        circle.style.transition = 'stroke-dashoffset 1.5s ease-in-out';
        circle.style.strokeDashoffset = offset;
    }, 100);
}

// Observe progress rings
const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const circle = entry.target.querySelector('.progress-ring-circle');
            if (circle && !circle.classList.contains('animated')) {
                circle.classList.add('animated');
                animateProgressRing(circle);
            }
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-progress-ring').forEach(ring => {
    progressObserver.observe(ring);
});

// ===== AUTO-SCROLLING INFINITE CAROUSELS =====
class AutoScrollCarousel {
    constructor(carousel) {
        this.carousel = carousel;
        this.scrollSpeed = 1;
        this.isHovered = false;
        this.animationId = null;
        this.cards = Array.from(carousel.querySelectorAll('.netflix-card'));

        // Clone cards for infinite effect
        this.cloneCards();

        // Event listeners
        this.carousel.addEventListener('mouseenter', () => this.pause());
        this.carousel.addEventListener('mouseleave', () => this.resume());

        // Start scrolling
        this.start();
    }

    cloneCards() {
        // Clone all cards and append them for seamless loop
        this.cards.forEach(card => {
            const clone = card.cloneNode(true);
            this.carousel.appendChild(clone);
        });
    }

    start() {
        const scroll = () => {
            if (!this.isHovered) {
                this.carousel.scrollLeft += this.scrollSpeed;

                // Reset scroll position for infinite loop
                const maxScroll = this.carousel.scrollWidth / 2;
                if (this.carousel.scrollLeft >= maxScroll) {
                    this.carousel.scrollLeft = 0;
                }
            }
            this.animationId = requestAnimationFrame(scroll);
        };

        scroll();
    }

    pause() {
        this.isHovered = true;
    }

    resume() {
        this.isHovered = false;
    }

    stop() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
        }
    }
}

// Initialize auto-scroll carousels
document.querySelectorAll('.netflix-carousel.auto-scroll').forEach(carousel => {
    new AutoScrollCarousel(carousel);
});

// ===== NAVIGATION SCROLL EFFECT =====
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();
});

function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.offsetTop - offset;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===== MOBILE MENU =====
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
        });
    });
}

// ===== NETFLIX CAROUSEL FUNCTIONALITY (Manual Navigation) =====
const carouselNavButtons = document.querySelectorAll('.carousel-nav');

carouselNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        const carouselId = button.getAttribute('data-carousel');
        const carousel = document.querySelector(`#${carouselId}Carousel`);

        if (!carousel) return;

        const scrollAmount = carousel.clientWidth * 0.8;
        const direction = button.classList.contains('carousel-nav-left') ? -1 : 1;

        carousel.scrollBy({
            left: scrollAmount * direction,
            behavior: 'smooth'
        });
    });
});

// Auto-hide carousel nav buttons on edges
function updateCarouselNavVisibility(carousel, leftBtn, rightBtn) {
    if (!carousel || !leftBtn || !rightBtn) return;

    const isAtStart = carousel.scrollLeft <= 10;
    const isAtEnd = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;

    leftBtn.style.opacity = isAtStart ? '0' : '';
    rightBtn.style.opacity = isAtEnd ? '0' : '';
}

// Add scroll listeners to all carousels (for manual navigation)
document.querySelectorAll('.netflix-carousel:not(.auto-scroll)').forEach(carousel => {
    carousel.addEventListener('scroll', () => {
        const container = carousel.closest('.carousel-container');
        if (!container) return;

        const leftBtn = container.querySelector('.carousel-nav-left');
        const rightBtn = container.querySelector('.carousel-nav-right');

        updateCarouselNavVisibility(carousel, leftBtn, rightBtn);
    });

    // Initial check
    const container = carousel.closest('.carousel-container');
    if (container) {
        const leftBtn = container.querySelector('.carousel-nav-left');
        const rightBtn = container.querySelector('.carousel-nav-right');
        updateCarouselNavVisibility(carousel, leftBtn, rightBtn);
    }
});

// Touch/Drag scrolling for non-auto-scroll carousels
document.querySelectorAll('.netflix-carousel:not(.auto-scroll)').forEach(carousel => {
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.style.cursor = 'grabbing';
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });

    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.style.cursor = 'grab';
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });

    // Set cursor style
    carousel.style.cursor = 'grab';
});

// ===== FILE UPLOAD HANDLING =====
const fileUploadArea = document.getElementById('fileUploadArea');
const fileInput = document.getElementById('resume');
const fileNameDisplay = document.getElementById('fileName');
const fileUploadText = document.querySelector('.file-upload-text');

if (fileUploadArea && fileInput) {
    // Click to upload
    fileUploadArea.addEventListener('click', () => {
        fileInput.click();
    });

    // File selected
    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        handleFileSelect(file);
    });

    // Drag and drop
    fileUploadArea.addEventListener('dragover', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileUploadArea.style.borderColor = 'var(--netflix-red)';
        fileUploadArea.style.background = 'rgba(229, 9, 20, 0.1)';
    });

    fileUploadArea.addEventListener('dragleave', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileUploadArea.style.borderColor = '';
        fileUploadArea.style.background = '';
    });

    fileUploadArea.addEventListener('drop', (e) => {
        e.preventDefault();
        e.stopPropagation();
        fileUploadArea.style.borderColor = '';
        fileUploadArea.style.background = '';

        const file = e.dataTransfer.files[0];
        if (file) {
            // Update file input
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            fileInput.files = dataTransfer.files;
            handleFileSelect(file);
        }
    });
}

function handleFileSelect(file) {
    if (!file) return;

    // Validate file size (5MB max)
    if (file.size > 5 * 1024 * 1024) {
        showFormStatus('error', 'File size must be less than 5MB');
        fileInput.value = '';
        return;
    }

    // Validate file type
    const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];

    if (!allowedTypes.includes(file.type)) {
        showFormStatus('error', 'Please upload a PDF, DOC, or DOCX file');
        fileInput.value = '';
        return;
    }

    // Update UI
    if (fileNameDisplay) {
        fileNameDisplay.textContent = `Selected: ${file.name}`;
        fileNameDisplay.style.display = 'block';
    }
    if (fileUploadText) {
        fileUploadText.textContent = 'File selected! Click to change';
    }
}

// ===== REFERRAL FORM SUBMISSION =====
const referralForm = document.getElementById('referralForm');
const submitBtn = document.getElementById('submitBtn');
const formStatus = document.getElementById('formStatus');

if (referralForm) {
    referralForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Show loading state
        submitBtn.classList.add('loading');
        submitBtn.disabled = true;
        formStatus.style.display = 'none';

        try {
            const formData = new FormData(referralForm);

            // Add Web3Forms access key (REPLACE WITH YOUR ACTUAL KEY)
            formData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY_HERE');

            // Add subject for email
            formData.append('subject', 'New IBM Referral Request');

            // Send form
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                showFormStatus('success', '✓ Thank you! Your referral request has been submitted successfully. I will review it and get back to you soon!');
                referralForm.reset();
                if (fileNameDisplay) fileNameDisplay.textContent = '';
                if (fileUploadText) fileUploadText.textContent = 'Click to upload or drag and drop';
            } else {
                throw new Error('Submission failed');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            showFormStatus('error', '✗ Oops! Something went wrong. Please try again or contact me directly via email at albinthomas231@gmail.com');
        } finally {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    });
}

function showFormStatus(type, message) {
    if (!formStatus) return;

    formStatus.className = `form-status ${type}`;
    formStatus.textContent = message;
    formStatus.style.display = 'block';

    // Auto-hide after 8 seconds
    setTimeout(() => {
        formStatus.style.display = 'none';
    }, 8000);
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
document.querySelectorAll('.netflix-section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    fadeInObserver.observe(section);
});

// ===== CARD SCALE ON HOVER (Enhanced for touch devices) =====
document.querySelectorAll('.netflix-card').forEach(card => {
    card.addEventListener('touchstart', function() {
        this.style.transform = 'scale(1.05)';
    });

    card.addEventListener('touchend', function() {
        this.style.transform = '';
    });
});

// ===== KEYBOARD NAVIGATION FOR CAROUSELS =====
document.addEventListener('keydown', (e) => {
    const focusedCarousel = document.querySelector('.netflix-carousel:hover');
    if (!focusedCarousel) return;

    if (e.key === 'ArrowLeft') {
        focusedCarousel.scrollBy({
            left: -300,
            behavior: 'smooth'
        });
    } else if (e.key === 'ArrowRight') {
        focusedCarousel.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
});

// ===== PERFORMANCE OPTIMIZATION =====
// Lazy load images if you add them later
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===== BUTTON RIPPLE EFFECT =====
document.querySelectorAll('.btn-play, .btn-info, .btn-netflix').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;

        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===== PARALLAX EFFECT FOR BACKGROUND ORBS =====
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const orbs = document.querySelectorAll('.gradient-orb');

    orbs.forEach((orb, index) => {
        const speed = 0.1 + (index * 0.05);
        orb.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ===== CONSOLE MESSAGE =====
console.log(
    '%c🎬 Welcome to my Netflix-themed portfolio!',
    'color: #E50914; font-size: 20px; font-weight: bold;'
);
console.log(
    '%c👨‍💻 Albin Abi Thomas - Senior AI Engineer @ IBM',
    'color: #ffffff; font-size: 14px;'
);
console.log(
    '%c💼 Looking to connect? Reach out via LinkedIn or email!',
    'color: #b3b3b3; font-size: 12px;'
);
console.log(
    '%c✨ Built with vanilla JavaScript - No frameworks needed!',
    'color: #46d369; font-size: 12px;'
);

// ===== PREVENT HORIZONTAL OVERFLOW =====
function preventHorizontalScroll() {
    const body = document.body;
    const html = document.documentElement;

    if (html.scrollWidth > html.clientWidth) {
        console.warn('Horizontal overflow detected');
    }
}

window.addEventListener('resize', preventHorizontalScroll);
preventHorizontalScroll();
