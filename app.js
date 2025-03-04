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
