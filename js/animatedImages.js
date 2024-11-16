document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible", entry.target.getAttribute("data-animation"));
                }
            });
        },
        { threshold: 0.2 }
    );

    const animatedBlocks = document.querySelectorAll(".info-block");
    animatedBlocks.forEach((block) => observer.observe(block));
});
