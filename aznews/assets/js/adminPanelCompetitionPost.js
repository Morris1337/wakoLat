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
const competitionCategory = document.createElement("form");
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
let isDisciplinBlockOpen = false;

const btnDisciplin = document.createElement("button");
btnDisciplin.classList.add("visual");
btnDisciplin.classList.add("block-open-btn");
btnDisciplin.classList.add("disciplin-block-open-btn");
btnDisciplin.textContent = "Disciplina";

if (!isDisciplinBlockOpen) {
    btnDisciplin.addEventListener("click", (event) => {
        event.preventDefault();
        // const disciplinBlock = document.createElement("div");
        // disciplinBlock.classList.add("disciplin-block");
        // disciplinBlock.classList.add("competition-open-block");
        // competitionCategory.appendChild(disciplinBlock);
        //
        // const btnCloseDisciplin = document.createElement("button");
        // const conteinerCloseBtn = document.createElement("div");
        // disciplinBlock.appendChild(conteinerCloseBtn);
        //
        // btnCloseDisciplin.classList.add("year-block-close-btn");
        // btnCloseDisciplin.classList.add("block-close-btn");
        // btnCloseDisciplin.textContent = "Ok";
        // btnCloseDisciplin.addEventListener("click", (event) => {
        //     event.preventDefault();
        //     disciplinBlock.remove();
        //     isDisciplinBlockOpen = false;
        //     btnDisciplin.disabled = false;
        // });
        // isDisciplinBlockOpen = true;
        //
        // const conteinerCheckbox = document.createElement("div");
        // conteinerCheckbox.classList.add("block-conteiner-checkbox");
        // conteinerCheckbox.classList.add("year-block-conteiner-checkbox");
        // disciplinBlock.appendChild(conteinerCheckbox);
        //
        // function addDisciplin(discipline) {
        //     const checkBox = document.createElement("input");
        //     checkBox.classList.add("year-block-checkbox");
        //     checkBox.classList.add("block-checkbox");
        //     checkBox.type = "checkbox";
        //     checkBox.id = `checkbox${discipline}`;
        //     checkBox.name = "yearCheckbox";
        //     checkBox.value = discipline;
        //     conteinerCheckbox.appendChild(checkBox);
        //
        //     const label = document.createElement("label");
        //     label.classList.add("discipline-block-label");
        //     label.classList.add("block-label");
        //     label.setAttribute("for", `checkbox${discipline}`);
        //     label.textContent = `${discipline}`;
        //     conteinerCheckbox.appendChild(label);
        // }
        // const allDiscipline = [
        //     "Disciplines",
        //     "Light contact(LC)",
        //     "Kick light(KL)",
        //     "Point fighting(PF)",
        //     "Low kick (LK)",
        //     "Full contact (FC)",
        //     "K1 style"
        // ];
        // for (let discipline = 1; discipline <= allDiscipline.length; discipline++) {
        //     addDisciplin(allDiscipline[discipline]);
        // }
        // disciplinBlock.appendChild(btnCloseDisciplin);
    });
}

// Year
let isYearBlockOpen = false;

const btnYear = document.createElement("button");
btnYear.classList.add("visual");
btnYear.classList.add("year-block-open-btn");
btnYear.classList.add("block-open-btn");
btnYear.textContent = "gads";

if (!isYearBlockOpen) {
    btnYear.addEventListener("click", (event) => {
        event.preventDefault();
        const yearBlock = document.createElement("div");
        yearBlock.classList.add("year-block");
        yearBlock.classList.add("competition-open-block");
        document.body.appendChild(yearBlock);

        const btnCloseYear = document.createElement("button");
        const conteinesCloseBtn = document.createElement("div");
        yearBlock.appendChild(conteinesCloseBtn);

        btnCloseYear.classList.add("block-close-btn");
        btnCloseYear.classList.add("year-block-close-btn");
        btnCloseYear.textContent = "Ok";
        btnCloseYear.addEventListener("click", (event) => {
            event.preventDefault();
            yearBlock.remove();
            isYearBlockOpen = false;
            btnYear.disabled = false;
        });
        isYearBlockOpen = true;
        btnYear.disabled = true;

        const conteinerCheckbox = document.createElement("div");
        conteinerCheckbox.classList.add("year-block-conteiner-checkbox");
        conteinerCheckbox.classList.add("block-conteiner-checkbox");
        yearBlock.appendChild(conteinerCheckbox);

        function addYear(year) {
            const checkBox = document.createElement("input");
            checkBox.classList.add("year-block-checkbox");
            checkBox.classList.add("block-checkbox");
            checkBox.type = "checkbox";
            checkBox.id = `checkbox${year}`;
            checkBox.name = "yearCheckbox";
            checkBox.value = year;
            conteinerCheckbox.appendChild(checkBox);

            const label = document.createElement("label");
            label.classList.add("year-block-label");
            label.classList.add("block-label");
            label.setAttribute("for", `checkbox${year}`);
            label.textContent = `${year}`;
            conteinerCheckbox.appendChild(label);
        }
        const currentYear = new Date().getFullYear();
        for (let year = 1980; year <= currentYear; year++) {
            addYear(year);
        }
        conteinesCloseBtn.appendChild(btnCloseYear);
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

const personWeight = document.createElement("div");
const btnWeight = document.createElement("input");
btnWeight.type = "button"
btnWeight.value = "Sportistu svars";
btnWeight.classList.add("visual");
btnWeight.classList.add("block-open-btn");
btnWeight.classList.add("year-block-open-btn");
personWeight.appendChild(btnWeight);

if (!isWeightBlockOpen) {
    btnWeight.addEventListener("click", (event) => {
        event.preventDefault();
        const weightBlock = document.createElement("div");
        weightBlock.classList.add("weight-block");
        weightBlock.classList.add("competition-open-block");
        personWeight.appendChild(weightBlock);

        const btnCloseWeight = document.createElement("button");
        const weightCloseContainer = document.createElement("div");
        weightBlock.appendChild(weightCloseContainer);
        btnCloseWeight.classList.add("block-close-btn");
        btnCloseWeight.classList.add("year-block-close-btn");
        btnCloseWeight.textContent = "Ok";
        btnCloseWeight.addEventListener("click", (event) => {
            event.preventDefault();
            weightBlock.remove();
            isWeightBlockOpen = false;
            btnWeight.disabled = false;
        });
        isYearBlockOpen = true;
        btnWeight.disabled = true;

        const containerCheckbox = document.createElement("div");
        containerCheckbox.classList.add("block-conteiner-checkbox");
        containerCheckbox.classList.add("year-block-conteiner-checkbox");
        weightBlock.appendChild(containerCheckbox);

        function addWeight(weight) {
            const checkBox = document.createElement("input");
            checkBox.classList.add("weight-block-checkbox");
            checkBox.classList.add("block-checkbox");
            checkBox.type = "checkbox";
            checkBox.id = `checkbox${weight}`;
            checkBox.name = "weightCheckbox";
            checkBox.value = weight;
            containerCheckbox.appendChild(checkBox);

            const label = document.createElement("label");
            label.classList.add("weight-block-label");
            label.classList.add("block-label");
            label.setAttribute("for", `checkbox${weight}`);
            label.textContent = `${weight} KG`;
            containerCheckbox.appendChild(label);
        }
        const defaultWeight = 100;
        for (let weight = 10; weight <= defaultWeight; weight += 5) {
            addWeight(weight);
        }
        weightCloseContainer.appendChild(btnCloseWeight);
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

function newCategory(){
    const blockPlus = document.createElement("img");
    blockPlus.src = "assets/img/icon/plus-square.svg";
    blockPlus.classList.add("visual");
    blockPlus.style.cursor = "pointer";
    blockPlus.style.width = "30px";

    blockPlus.addEventListener("click", () => {
        const clonedCategory = competitionCategory.cloneNode(true);
        newCategoryBlock.appendChild(clonedCategory);
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
