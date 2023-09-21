function toggle(button, element){
    button.addEventListener("click", ()=>{
        element.classList.toggle("open")
    })
}

const iconToOpen = document.querySelector(".admin-menu-phone")
const iconBtn = document.querySelector(".admin-menu-icon")

toggle(iconBtn, iconToOpen)