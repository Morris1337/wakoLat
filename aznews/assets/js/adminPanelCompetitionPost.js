import { btnDisciplinClick, btnYearClick, btnWeightClick } from "./adminPanelCompetitionPostFunctions.js";

export const competitionCategory = document.createElement("form");
export const btnDisciplin = document.createElement("button");

export const btnYear = document.createElement("button");

export const btnWeight = document.createElement("input");
export const personWeight = document.createElement("div");

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
            const date = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
            file.classList.add("custom-file-upload")
            country.classList.add("visual")
            city.classList.add("visual")
            eMail.classList.add("visual")
            phone.classList.add("visual")
            date.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file"
            country.placeholder = "Country"
            city.placeholder = "City"
            eMail.placeholder = "E-Mail"
            phone.placeholder = "Phone Number"
            date.type = "date";

            form.appendChild(competitionForm)
            competitionForm.appendChild(name)
            competitionForm.appendChild(file)
            competitionForm.appendChild(country)
            competitionForm.appendChild(city)
            competitionForm.appendChild(eMail)
            competitionForm.appendChild(phone)
            competitionForm.appendChild(date)

// Sex

// const competitionCategory = document.createElement("form");
competitionCategory.classList.add("formContent");

const sex = document.createElement("select");
sex.classList.add("visual");

const optionSex = document.createElement("option");
optionSex.text = "Dzimums";
optionSex.value = "choise";
const optionMale = document.createElement("option");
optionMale.text = "Virietis";
optionMale.value = "male";
const optionFemale = document.createElement("option");
optionFemale.text = "Sieviete";
optionFemale.value = "female";

// disciplin

btnDisciplin.classList.add("visual");
btnDisciplin.classList.add("block-open-btn");
btnDisciplin.classList.add("disciplin-block-open-btn");
btnDisciplin.textContent = "Disciplina";


    btnDisciplin.addEventListener("click", (event) => {
        btnDisciplinClick(event)   
    });


// Year

btnYear.classList.add("visual");
btnYear.classList.add("year-block-open-btn");
btnYear.classList.add("block-open-btn");
btnYear.textContent = "gads";


btnYear.addEventListener("click", (event) => {
    btnYearClick(event)
});

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

btnWeight.type = "button"
btnWeight.value = "Sportistu svars";
btnWeight.classList.add("visual");
btnWeight.classList.add("block-open-btn");
btnWeight.classList.add("weight-block-open-btn");
personWeight.appendChild(btnWeight);

btnWeight.addEventListener("click", (event) => {
    btnWeightClick(event)
});


// clone container
const plusContainer = document.createElement("div");
plusContainer.style.display = "flex";
plusContainer.style.justifyContent = "center";

if (window.innerWidth <= 375) {
    plusContainer.style.width = "350px";
}

const newCategoryBlock = document.createElement("div");

function newCategory(){ 
    const blockPlus = document.createElement("img");
    blockPlus.src = "assets/img/icon/plus-square.svg";
    blockPlus.classList.add("visual");
    blockPlus.style.cursor = "pointer";
    blockPlus.style.width = "30px";

    blockPlus.addEventListener("click", () => {
        const clonedCategory = competitionCategory.cloneNode(true);
        const newDisciplinBtn = clonedCategory.querySelector(".disciplin-block-open-btn")
        newDisciplinBtn.addEventListener("click", (event)=>{
            btnDisciplinClick(event)
        })
        const newYearBtn = clonedCategory.querySelector(".year-block-open-btn")
        newYearBtn.addEventListener("click", (event)=>{
            btnYearClick(event)
        })

        const newWeightBtn = clonedCategory.querySelector(".weight-block-open-btn")
        newWeightBtn.addEventListener("click", ()=>{
            btnWeightClick(event)
        })
        newCategoryBlock.appendChild(clonedCategory);
        console.log(clonedCategory)
    });
    return blockPlus;
}

const categoryPlus = newCategory();

form.appendChild(competitionCategory);
competitionCategory.appendChild(sex);
sex.appendChild(optionSex);
sex.appendChild(optionMale);
sex.appendChild(optionFemale);
competitionCategory.appendChild(btnDisciplin);
competitionCategory.appendChild(btnYear);
competitionCategory.appendChild(roundAmount);
competitionCategory.appendChild(roundLength);
competitionCategory.appendChild(personWeight);
plusContainer.appendChild(categoryPlus);
form.appendChild(newCategoryBlock);
form.appendChild(plusContainer);




}


export {competitionPost}