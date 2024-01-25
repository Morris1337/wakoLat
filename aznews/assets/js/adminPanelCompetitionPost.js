import {sex, btnDisciplinClick, btnWeightClick, btnYearClick } from "./adminPanelCompetitionPostFunctions.js"

const competitionCategory = document.createElement("form");
const personDisciplin = document.createElement("div");
const btnDisciplin = document.createElement("button");
const personYear = document.createElement("div");
const btnYear = document.createElement("button");
const personWeight = document.createElement("div");
const btnWeight = document.createElement("button");

function competitionPost(){

            const postName = document.createElement("h2")
            postName.textContent = "Jaunie sacensibas"
            postName.classList.add("flex-center")
            form.appendChild(postName)

            const competitionForm = document.createElement("form")

            competitionForm.classList.add("formContent")

            const file = document.createElement("input")
            const name = document.createElement("input")
            const country = document.createElement("input")
            const city = document.createElement("input")
            const eMail = document.createElement("input")
            const phone = document.createElement("input")
            const dateStart = document.createElement("input")
            const dateEnd = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
            file.classList.add("custom-file-upload")
            country.classList.add("visual")
            city.classList.add("visual")
            eMail.classList.add("visual")
            phone.classList.add("visual")
            dateStart.classList.add("visual")
            dateEnd.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file";
            country.placeholder = "Country";
            city.placeholder = "City";
            eMail.placeholder = "E-Mail";
            phone.placeholder = "Phone Number";
            dateStart.type = "date";
            dateEnd.type = "date";

            form.appendChild(competitionForm)
            competitionForm.appendChild(name)
            competitionForm.appendChild(file)
            competitionForm.appendChild(country)
            competitionForm.appendChild(city)
            competitionForm.appendChild(eMail)
            competitionForm.appendChild(phone)
            competitionForm.appendChild(dateStart)
            competitionForm.appendChild(dateEnd)

}

function payInfo(){
    const payBlock = document.createElement("div")

    payBlock.classList.add("formContent")
    const date = document.createElement("input")
    const price = document.createElement("input")

    payBlock.style.marginTop = "20px";
    date.classList.add("visual")
    price.classList.add("visual")

    date.type = "date";
    price.placeholder = "Summa EUR";

        form.appendChild(payBlock)
        payBlock.appendChild(date)
        payBlock.appendChild(price)

}

function category(isFirstRender){
// Sex
competitionCategory.classList.add("formContent");
if(isFirstRender === false){
    competitionCategory.innerHTML = "";
}


sex()

// disciplin
let isDisciplinBlockOpen = false;

btnDisciplin.classList.add("visual");
btnDisciplin.classList.add("block-open-btn");
btnDisciplin.classList.add("disciplin-block-open-btn");
btnDisciplin.textContent = "Disciplina";
personDisciplin.appendChild(btnDisciplin);

if (!isDisciplinBlockOpen) {
    btnDisciplin.addEventListener("click", (event) => {
        event.preventDefault();
        btnDisciplinClick(event)
    });
}

// Year
let isYearBlockOpen = false;

btnYear.classList.add("visual");
btnYear.classList.add("year-block-open-btn");
btnYear.classList.add("block-open-btn");
btnYear.textContent = "gads";
personYear.appendChild(btnYear);

if (!isYearBlockOpen) {
    btnYear.addEventListener("click", (event) => {
        event.preventDefault();
        btnYearClick(event)
    });
}

// Round amount
const roundAmount = document.createElement("div");
const roundSelect = document.createElement("select");
roundSelect.classList.add("visual");

const optionAmount = ["Raundu skaits", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 0; i < optionAmount.length; i++) {
    const option = document.createElement("option");
    option.value = optionAmount[i];
    option.text = optionAmount[i];
    roundSelect.appendChild(option);
}

roundAmount.appendChild(roundSelect);

// Round length

const roundLength = document.createElement("div");
const roundLengthSelect = document.createElement("select");
roundLengthSelect.classList.add("visual");

const optionLength = ["Raundu ilgums", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let i = 0; i < optionLength.length; i++) {
    const option = document.createElement("option");
    option.value = optionLength[i];
    option.text = `${optionLength[i]} min.`;
    roundLengthSelect.appendChild(option);
}

roundLength.appendChild(roundLengthSelect);

// Weight
let isWeightBlockOpen = false;

btnWeight.textContent = "Sportistu svars"
btnWeight.value = "Sportistu svars";
btnWeight.classList.add("visual");
btnWeight.classList.add("block-open-btn");
btnWeight.classList.add("weight-block-open-btn");
personWeight.appendChild(btnWeight);

if (!isWeightBlockOpen) {
    btnWeight.addEventListener("click", (event) => {
        event.preventDefault();
        btnWeightClick(event)
    });
}


// clone container
const plusContainer = document.createElement("div");
plusContainer.style.display = "flex";
plusContainer.style.justifyContent = "center";

if (window.innerWidth <= 375) {
    plusContainer.style.width = "350px";
}

const newCategoryBlock = document.createElement("div");

function newCategory() {
    const blockPlus = document.createElement("img");
    blockPlus.src = "assets/img/icon/plus-square.svg";
    blockPlus.classList.add("visual");
    blockPlus.style.cursor = "pointer";
    blockPlus.style.width = "30px";

    blockPlus.addEventListener("click", () => {

        const clonedCategory = competitionCategory.cloneNode(true);
        const newDisciplineBtn = clonedCategory.querySelector(".disciplin-block-open-btn")
        newDisciplineBtn.addEventListener("click", (event)=>{
            btnDisciplinClick(event)
        })
        const newYearBtn = clonedCategory.querySelector(".year-block-open-btn")
        newYearBtn.addEventListener("click", (event)=>{
            btnYearClick(event)
        })
        const newWeightBtn = clonedCategory.querySelector(".weight-block-open-btn")
        newWeightBtn.addEventListener("click", (event)=>{
            btnWeightClick(event)
        })
        newCategoryBlock.appendChild(clonedCategory);
    });

    return blockPlus;
}

const categoryPlus = newCategory();


form.appendChild(competitionCategory);
competitionCategory.appendChild(personDisciplin);
competitionCategory.appendChild(personYear);
competitionCategory.appendChild(roundAmount);
competitionCategory.appendChild(roundLength);
competitionCategory.appendChild(personWeight);
plusContainer.appendChild(categoryPlus);
form.appendChild(newCategoryBlock);
form.appendChild(plusContainer);


}


export {competitionPost, category, payInfo, personYear, personDisciplin, competitionCategory, btnDisciplin, btnYear, personWeight, btnWeight}
