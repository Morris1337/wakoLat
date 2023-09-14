function openHoverMenu(menuElement, classOpen){
    menuElement.addEventListener("mouseover", () => {
        classOpen.classList.add("open");
      });
      
      menuElement.addEventListener("mouseout", () => {
        classOpen.classList.remove("open");
      });
}
    const ulHeaderFeder = document.querySelector(".ul-header-feder")
    const liFeder = document.querySelector("#liFeder")

    const ulHeaderDok = document.querySelector(".ul-header-dok")
    const liDoc = document.querySelector("#liDoc")

    const ulHeaderKomis = document.getElementsByClassName("ul-header-komis")
    const komis = document.querySelector("#komis")


    openHoverMenu(liFeder, ulHeaderFeder)
    openHoverMenu(liDoc, ulHeaderDok)
    openHoverMenu(komis, ulHeaderKomis)
