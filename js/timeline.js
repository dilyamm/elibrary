document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".timeline-item");

    function animateTimeline() {
        timelineItems.forEach((item) => {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                // Add animation only if it's not already added
                if (!item.classList.contains("animated")) {
                    item.classList.add("animated");
                }
            }
        });
    }

    // Trigger animations on scroll and on page load
    window.addEventListener("scroll", animateTimeline);
    animateTimeline(); // Initial animation check
});
