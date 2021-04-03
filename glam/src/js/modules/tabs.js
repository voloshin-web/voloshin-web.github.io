export default function tabs() {
    try {
        const tabHeader = document.querySelectorAll(".tabs__header")[0],
        tabBody = document.querySelectorAll(".tabs__body")[0],
        tabsPane = tabHeader.querySelectorAll(".tab");

        for (let i = 0; i < tabsPane.length; i++){
            tabsPane[i].addEventListener("click", function(){
                tabHeader.querySelectorAll(".tab_active")[0].classList.remove("tab_active");
                tabsPane[i].classList.add("tab_active");
                tabBody.querySelectorAll(".content__block_active")[0].classList.remove("content__block_active");
                tabBody.querySelectorAll(".content__block")[i].classList.add("content__block_active");
            });
        }
    } catch(e) {
    }
}

