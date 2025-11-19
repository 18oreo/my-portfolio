document.addEventListener('DOMContentLoaded', function() {
    // Preloader
    const preloader = document.querySelector('.preloader');
    window.addEventListener('load', () => {
        preloader.classList.add('fade-out');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    });
    

    // Cursor Effect
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });
    
    document.querySelectorAll('a, button, .portfolio-item, .service-card').forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.classList.add('active');
            cursorFollower.classList.add('active');
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.classList.remove('active');
            cursorFollower.classList.remove('active');
        });
    });
      // Skills Animation
    const skillProgress = document.querySelectorAll('.skill-progress');
    function animateSkills() {
        skillProgress.forEach(progress => {
            const width = progress.getAttribute('data-width');
            progress.style.width = width + '%';
        });
    }
    
    // Animate skills when section is in view
    const skillsSection = document.querySelector('.skills');
    const skillsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                skillsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });
    
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
    }
});
// ...existing code...
    // education Animation
    const eduProgress = document.querySelectorAll('.edu-progress');
    function animateEdu() {
        eduProgress.forEach(progress => {
            const width = progress.getAttribute('data-width');
            if (width !== null) {
                progress.style.width = width + '%';
            }
        });
    }

    // Animate education when section is in view
    const eduSection = document.querySelector('.edu');
    const eduObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateEdu();
                eduObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    if (eduSection) {
        eduObserver.observe(eduSection);
    }