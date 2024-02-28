
$(document).ready(function () {
    // Activate Owl Carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    // Scrollspy
    $('body').scrollspy({ target: '#navbarNav' });
});
// modal function
$(document).ready(function () {
    $('.product-image').click(function () {
        var modalId = $(this).data('bs-target');
        $(modalId).modal('show');
    });
});

// Show/hide back to top button function
window.addEventListener("scroll", function () {
    var backToTopButton = document.querySelector('.back-to-top');
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Smooth scroll to top function
document.querySelector('.back-to-top').addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
