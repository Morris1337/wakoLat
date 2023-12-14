import { competitionCategory, personYear, personDisciplin, btnDisciplin, btnYear, personWeight, btnWeight } from "./adminPanelCompetitionPost.js";

// disciplin

let isDisciplinBlockOpen = false;

export function btnDisciplinClick(event) {
    event.preventDefault();
    if (isDisciplinBlockOpen) {
        return;
    }
    const disciplinBlock = document.createElement("div");
    disciplinBlock.classList.add("disciplin-block");
    disciplinBlock.classList.add("competition-open-block");
    personDisciplin.appendChild(disciplinBlock);

    const btnCloseDisciplin = document.createElement("button");
    const conteinerCloseBtn = document.createElement("div");
    disciplinBlock.appendChild(conteinerCloseBtn);

    btnCloseDisciplin.classList.add("year-block-close-btn");
    btnCloseDisciplin.classList.add("block-close-btn");
    btnCloseDisciplin.textContent = "Ok";
    btnCloseDisciplin.addEventListener("click", (event) => {
        event.preventDefault();
        disciplinBlock.remove();
        isDisciplinBlockOpen = false;
        btnDisciplin.disabled = false;
    });
    isDisciplinBlockOpen = true;

    const conteinerCheckbox = document.createElement("div");
    conteinerCheckbox.classList.add("block-conteiner-checkbox");
    conteinerCheckbox.classList.add("year-block-conteiner-checkbox");
    disciplinBlock.appendChild(conteinerCheckbox);

    function addDisciplin(discipline) {
        const checkBox = document.createElement("input");
        checkBox.classList.add("year-block-checkbox");
        checkBox.classList.add("block-checkbox");
        checkBox.type = "checkbox";
        checkBox.id = `checkbox${discipline}`;
        checkBox.name = "yearCheckbox";
        checkBox.value = discipline;
        conteinerCheckbox.appendChild(checkBox);

        const label = document.createElement("label");
        label.classList.add("discipline-block-label");
        label.classList.add("block-label");
        label.setAttribute("for", `checkbox${discipline}`);
        label.textContent = `${discipline}`;
        conteinerCheckbox.appendChild(label);
    }
    const allDiscipline = [
        "Disciplines",
        "Light contact(LC)",
        "Kick light(KL)",
        "Point fighting(PF)",
        "Low kick (LK)",
        "Full contact (FC)",
        "K1 style"
    ];
    for (let discipline = 1; discipline < allDiscipline.length; discipline++) {
        addDisciplin(allDiscipline[discipline]);
    }
    disciplinBlock.appendChild(btnCloseDisciplin);
}

// Year

let isYearBlockOpen = false;
export function btnYearClick(event) {
    event.preventDefault();
    if (isYearBlockOpen) {
        return;
    }
    const yearBlock = document.createElement("div");
    yearBlock.classList.add("year-block");
    yearBlock.classList.add("competition-open-block");
    personYear.appendChild(yearBlock);

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
}

// Weight

let isWeightBlockOpen = false;
export function btnWeightClick(event) {
    event.preventDefault();
    if (isWeightBlockOpen) {
        return;
    }
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
    isWeightBlockOpen = true;
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
    for (let weight = 10; weight < defaultWeight; weight += 5) {
        addWeight(weight);
    }
    weightCloseContainer.appendChild(btnCloseWeight);
}
