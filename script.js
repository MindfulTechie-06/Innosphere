// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Course button click event
    document.querySelectorAll('.course-button').forEach(button => {
        button.addEventListener('click', function() {
            const course = this.getAttribute('data-course');
            alert(`You clicked on the ${course} course button!`);
        });
    });

    // Explore Courses button click event
    document.getElementById('exploreCourses').addEventListener('click', function() {
        document.getElementById('courses').scrollIntoView({ behavior: 'smooth' });
    });

    // Learn More AI button click event
    document.getElementById('learnMoreAI').addEventListener('click', function() {
        alert('Learn more about our AI video creation process!');
    });

    // Example interaction for course cards
    document.querySelectorAll('.course-card').forEach(card => {
        card.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)';
            this.style.transition = 'transform 0.3s ease';
        });

        card.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });
});