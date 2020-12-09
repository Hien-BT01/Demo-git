let buttonDesmosCustomMades = document.querySelectorAll("[data-button-target]");
let imageDemosCustomMades = document.querySelectorAll("[data-content]");
buttonDesmosCustomMades.forEach(tab => {
    tab.addEventListener('click',() => {
        const buttonTarget = tab.getAttribute('data-button-target');
        imageDemosCustomMades.forEach((imageDemosCustomMade) => {
            const dataContents = imageDemosCustomMade.getAttribute('data-content').split(" ");
            //imageDemosCustomMade.classList.add("zoom-in");
            // let timeOut = setTimeout(function(){
            //     imageDemosCustomMade.classList.add("noneChecked");
            // },10)
            imageDemosCustomMade.classList.add("noneChecked");
            // imageDemosCustomMade.classList.remove("zoom-out");
            // imageDemosCustomMade.classList.add("zoom-in");
            console.log(dataContents);
            dataContents.forEach((e) => {
                if(e === buttonTarget) {
                    // imageDemosCustomMade.classList.remove("zoom-in");
                    imageDemosCustomMade.classList.remove("noneChecked");
                    imageDemosCustomMade.classList.add("zoom-out");
                    // clearTimeout(timeOut);
                    // setTimeout(function(){
                    //     imageDemosCustomMade.classList.add("zoom-out");
                    // },10);
                        // setTimeout(function(){
                        //     $(imageDemosCustomMade).hide()
                        // },300);
                        // console.log($(imageDemosCustomMade));
                }
            })
        })
    })
})

// const btnTab = document.querySelectorAll("[data-button-target]");
// const items = document.querySelectorAll("[data-content]");


// btnTab.forEach((btn) => {
//     btn.onclick = function() {
//         const btnTarget = this.getAttribute('data-button-target');
//         items.forEach((item) => {
//             const dataContents = item.getAttribute('data-content').split(" ");
//             item.classList.remove('isChecked'); // moi khi bam button thi se an het cac item truoc
//             dataContents.forEach((value) => {
//                 if (value === btnTarget){
//                     item.classList.add('isChecked');
//                     item.classList.add("zoom-out");
//                 }
//             });
//         });
//     }
// });