function toggle(getButton, getElement) {
    const button = document.querySelector(getButton);
    const element = document.querySelector(getElement);

    if (button && element) {
        button.addEventListener("click", () => {
            element.classList.toggle("open");
        });
    }
}



toggle(".admin-menu-icon-phone-block", ".admin-menu-section")
toggle(".admin-menu-icon-phone-block", ".admin-menu-phone")
toggle(".admin-menu-icon-phone-block", ".admin-menu-icon-phone-block")
toggle("#apply-for-access", "#application-form")
