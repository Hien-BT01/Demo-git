let submit = document.querySelector(".submit");


submit.addEventListener("click",(e) => {
    let btn_top_pos = e.offsetY;
    let btn_left_pos = e.offsetX;
    const spanElement = document.createElement("span");
    spanElement.classList.add("effect-click");
    spanElement.style.top = `${btn_top_pos}px`;
    spanElement.style.left = `${btn_left_pos}px`;
    submit.appendChild(spanElement);
    setTimeout(() => {
        submit.removeChild(spanElement);
    },300)
}) 