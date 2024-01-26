const liBlockList = document.querySelectorAll(".li-header-link")
const buttonList = document.querySelectorAll(".rules")
const contentList = document.querySelectorAll(".content")

function blockOpen(index){
    contentList.forEach((block) =>{
        block.classList.remove("open")
    })
    contentList[index].classList.add("open")
}
const hash = window.location.hash.substring(1);
    const index = hash === "dopings" ? 1 : 0; // Задаем индекс в зависимости от хэша
    blockOpen(index);

liBlockList.forEach((elem, index) =>{
    elem.addEventListener("click", (event)=>{
        console.log(elem, index);
        blockOpen(index)
    })
})

buttonList.forEach((elem, index) =>{
    elem.addEventListener("click", () =>{
        console.log(elem, index)
        blockOpen(index)
    })
})