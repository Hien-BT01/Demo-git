let flipAnimation = document.querySelectorAll(".animation_flip");

flipAnimation.forEach((flipAnimation) => {
    flipAnimation.addEventListener("click", (event) => {
        flipAnimation.classList.toggle("animate__flipInY");
        if (flipAnimation.classList.contains("animate__flipInY")) {
            flipAnimation.classList.remove("animate__flipInY");
        }
        setTimeout(function () {
            flipAnimation.classList.add("animate__flipInY");
        }, 10);
    });
});