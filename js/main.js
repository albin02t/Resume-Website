// ================================
// NETFLIX-THEMED PORTFOLIO JS
// ================================

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

// ===== NETFLIX CAROUSEL FUNCTIONALITY =====
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

// Add scroll listeners to all carousels
document.querySelectorAll('.netflix-carousel').forEach(carousel => {
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

// Touch/Drag scrolling for carousels
document.querySelectorAll('.netflix-carousel').forEach(carousel => {
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

// ===== PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

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
