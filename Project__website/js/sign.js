function ribbleClick(element,e){
    console.log(element)
    let btn_top_pos = e.offsetY;
    let btn_left_pos = e.offsetX;
    const spanElement = document.createElement("span");
    spanElement.classList.add("effect-click");
    spanElement.style.top = `${btn_top_pos}px`;
    spanElement.style.left = `${btn_left_pos}px`;
    element.appendChild(spanElement);
    setTimeout(() => {
        element.removeChild(spanElement);
    },300)
}