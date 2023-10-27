function toggle(getButton, getElement) {
    const button = document.querySelector(getButton);
    const element = document.querySelector(getElement);

    if (button && element) {
        button.addEventListener("click", () => {
            element.classList.toggle("open");
        });
    }
}

// const menuContent = document.querySelector(".admin-menu-section")
// const iconToOpen = document.querySelector(".admin-menu-phone")
// const buttonPosition = document.querySelector(".admin-menu-icon-phone-block")
// const iconBtn = document.querySelector(".admin-menu-icon-phone-block")
//competition-detals
// const applyForAccess = document.querySelector("#apply-for-access")
// const applicationForm = document.querySelector("#application-form")

toggle(".admin-menu-icon-phone-block", ".admin-menu-section")
toggle(".admin-menu-icon-phone-block", ".admin-menu-phone")
toggle(".admin-menu-icon-phone-block", ".admin-menu-icon-phone-block")
toggle("#apply-for-access", "#application-form")
