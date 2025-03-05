document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuItems = document.querySelectorAll(".menu-item");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");

            menuItems.forEach(item => {
                if (filterValue === "all" || item.classList.contains(filterValue)) {
                    item.classList.remove("hidden");
                    item.style.animation = "fadeIn 0.5s ease-in-out";
                } else {
                    item.style.animation = "fadeOut 0.5s ease-in-out";
                    setTimeout(() => item.classList.add("hidden"), 500);
                }
            });
        });
    });
});

/* CSS Animations */
const styles = document.createElement('style');
styles.innerHTML = `
@keyframes fadeIn {
    from { opacity: 0; transform: scale(0.8); }
    to { opacity: 1; transform: scale(1); }
}
@keyframes fadeOut {
    from { opacity: 1; transform: scale(1); }
    to { opacity: 0; transform: scale(0.8); }
}`;
document.head.appendChild(styles);



// google revies 
$(document).ready(function(){
    $('.reviews-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.reviews-slider').slick({
        slidesToShow: 3,       // Show 3 reviews at a time on desktop
        slidesToScroll: 1,     // Move 1 review per scroll
        autoplay: true,        // Enable auto-slide
        autoplaySpeed: 3500,   // Slide every 3.5 seconds
        dots: true,            // Show navigation dots
        arrows: false,         // Hide navigation arrows
        pauseOnHover: false,   // Continue sliding even if hovered
        speed: 800,            // Smooth transition speed (0.8 sec)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2  // Show 2 reviews on tablets
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1  // Show 1 review on mobile
                }
            }
        ]
    });
});

// google reviws

// footer 
document.addEventListener("DOMContentLoaded", function() {
    const socialIcons = document.querySelectorAll(".social-icon");

    socialIcons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.transform = "scale(1.1)";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.transform = "scale(1)";
        });
    });
});
// end footer