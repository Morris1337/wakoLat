const rulesList = document.querySelectorAll(".rules")
const contentZone = document.querySelectorAll(".content_zone")

let currentIndex = 0;

function text(textIndex){
        contentZone.forEach((text) => {
        text.style.display = "none";
    })
    contentZone[textIndex].style.display = "block";
    buttonPush()
}

text(0)


function buttonPush(){
    rulesList.forEach((element, index) =>{
        if(index === currentIndex){
            element.classList.add("change")
        }else{
            element.classList.remove("change")
        }
        element.addEventListener("click", ()=>{
            currentIndex = index
            text(index)
        })
    })
}


function loadHtml(place, file){
    fetch(file)
    .then(response => {
        if(!response.ok){
            throw new error("shit happens");
        }
        return response.text();
    })
    .then(data =>{
        place.textContent = data;
    })
    .catch(error =>{
        console.error(error)
    })
}


buttonPush(rulesList, contentZone)
