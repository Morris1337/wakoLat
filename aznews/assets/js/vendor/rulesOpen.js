const rulesList = document.querySelectorAll(".rules")
const contentZone = document.querySelectorAll(".content_zone")
const rules_k1 = document.getElementById("rules_k1")
const wakoRules = document.getElementById("wako_rules")
// const kickLightNoteikumi = document.getElementById("kick_light_noteikumi")

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
            // contentZone.classList.toggle("open")
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

    // $(document).ready(function (){
    //     $("#rules_k1").load("../../../files/noteikumi/K_1_noteikumi2.html");
    // })

// loadHtml(rules_k1, "../../../files/noteikumi/K_1_noteikumi2.html")
// loadHtml(wakoRules, "../../../files/noteikumi/WAKO_Rules_25_10_2022.html")
// loadHtml(kickLightNoteikumi, "../../../files/noteikumi/Kick_light_noteikumi.pdf")


buttonPush(rulesList, contentZone)
