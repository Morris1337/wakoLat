function toggle(button, element){
    button.addEventListener("click", ()=>{
        element.classList.toggle("open")
    })
}

const menuContent = document.querySelector(".admin-menu-section")
const iconToOpen = document.querySelector(".admin-menu-phone")
const iconBtn = document.querySelector(".admin-menu-icon-phone-block")

toggle(iconBtn, iconToOpen)
toggle(iconBtn, menuContent)
