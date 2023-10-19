// import { form } from "./adminPanel.js";


function competitionPost(){
    
            form.classList.remove("formContent")
            form.classList.add("competitionBlock")

            const competitionForm = document.createElement("form")

            competitionForm.classList.add("competitionForm")
            
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

            const competitionCategory = document.createElement("form")
            competitionCategory.classList.add("competitionCategory")

            const sex = document.createElement("select")
            sex.classList.add("visual")

            const optionSex = document.createElement("option")
            optionSex.text = "Dzimums";
            optionSex.value = "choise"; 
            const optionMale = document.createElement("option")
            optionMale.text = "Virietis";
            optionMale.value = "male"; 
            const optionFemale = document.createElement("option")
            optionFemale.text = "Sieviete";
            optionFemale.value = "female";

            let isYearBlockOpen = false;

            const btnYear = document.createElement("button")
            btnYear.classList.add("visual")
            btnYear.classList.add("year-block-open-btn")
            btnYear.textContent = "year"

            if(!isYearBlockOpen){
                
            
                btnYear.addEventListener("click", (event)=>{
                    event.preventDefault();
                    const yearBlock = document.createElement("div")
                    yearBlock.classList.add("year-block")
                    competitionCategory.appendChild(yearBlock)
                    const btnCloseYear = document.createElement("button")
                    const conteinesCloseBtn = document.createElement("div")
                    yearBlock.appendChild(conteinesCloseBtn)
                    btnCloseYear.classList.add("year-block-close-btn")
                    btnCloseYear.textContent = "Ok"
                    btnCloseYear.addEventListener("click", (event)=>{
                        event.preventDefault()
                        yearBlock.remove(); // Удаляем yearBlock
                        isYearBlockOpen = false;
                        btnYear.disabled = false;

                    })
                    isYearBlockOpen = true;
                    btnYear.disabled = true;

                    const conteinerCheckbox = document.createElement("div")
                    conteinerCheckbox.classList.add("year-block-conteiner-checkbox")
                    yearBlock.appendChild(conteinerCheckbox)

                    function addYear(year){
                        const checkBox = document.createElement("input");
                        checkBox.classList.add("year-block-checkbox")
                        checkBox.type = "checkbox";
                        checkBox.id = `checkbox${year}`; // Установите уникальный ID
                        checkBox.name = "yearCheckbox"; // Установите имя, если необходимо
                        checkBox.value = year; // Установите значение, если необходимо
                        conteinerCheckbox.appendChild(checkBox)
    
                        const label = document.createElement("label");
                        label.classList.add("year-block-label")
                        label.setAttribute("for", `checkbox${year}`); // Устанавливаем "for" атрибут, связывая label с чекбоксом
                        label.textContent = `${year}`; // Добавляем текст в label
                        conteinerCheckbox.appendChild(label); // Добавляем label к yearBlock    
                    }
                    const currentYear = new Date().getFullYear();
                    for (let year = 1980; year <= currentYear; year++){
                        addYear(year)
                    }
                    conteinesCloseBtn.appendChild(btnCloseYear)

                })
            
            }

            const roundAmount = document.createElement("div")
            const roundSelect = document.createElement("select")
            roundSelect.classList.add("visual")

            const optionAmount = ["Raundu skaits", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            for(let i = 0; i < optionAmount.length; i++){
                const option = document.createElement("option");
                option.value = optionAmount[i];
                option.text = optionAmount[i];
                roundSelect.appendChild(option);
            }


            roundAmount.appendChild(roundSelect)

            const roundLenght = document.createElement("div")
            const roundLenghtSelect = document.createElement("select")
            roundLenghtSelect.classList.add("visual")

            const optionLength = ["Raundu ilgums", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
            for(let i = 0; i < optionLength.length; i++){
                const option = document.createElement("option");
                option.value = optionLength[i];
                option.text = `${optionLength[i]} min `;
                roundLenghtSelect.appendChild(option);
            }


            roundLenght.appendChild(roundLenghtSelect)

            let isWeightBlockOpen = false;

            const personWeight = document.createElement("div")
            const btnWeight = document.createElement("button")
            btnWeight.classList.add("visual")
            btnWeight.classList.add("year-block-open-btn")
            btnWeight.textContent = "year"

            if(!isWeightBlockOpen){
                btnWeight.addEventListener("click", (event)=>{
                    event.preventDefault();
                    const weightBlock = document.createElement("div")
                    weightBlock.classList.add("year-block")
                    competitionCategory.appendChild(weightBlock)
                    const btnWeightYear = document.createElement("button")
                    const conteinesCloseBtn = document.createElement("div")
                    weightBlock.appendChild(conteinesCloseBtn)
                    btnWeightYear.classList.add("year-block-close-btn")
                    btnWeightYear.textContent = "Ok"
                    btnWeightYear.addEventListener("click", (event)=>{
                        event.preventDefault()
                        weightBlock.remove(); // Удаляем yearBlock
                        isWeightBlockOpen = false;
                        btnWeight.disabled = false;

                    })
                    isYearBlockOpen = true;
                    btnWeight.disabled = true;

                    const conteinerCheckbox = document.createElement("div")
                    conteinerCheckbox.classList.add("year-block-conteiner-checkbox")
                    weightBlock.appendChild(conteinerCheckbox)

                    function addYear(year){
                        const checkBox = document.createElement("input");
                        checkBox.classList.add("year-block-checkbox")
                        checkBox.type = "checkbox";
                        checkBox.id = `checkbox${year}`; // Установите уникальный ID
                        checkBox.name = "yearCheckbox"; // Установите имя, если необходимо
                        checkBox.value = year; // Установите значение, если необходимо
                        conteinerCheckbox.appendChild(checkBox)
    
                        const label = document.createElement("label");
                        label.classList.add("year-block-label")
                        label.setAttribute("for", `checkbox${year}`); // Устанавливаем "for" атрибут, связывая label с чекбоксом
                        label.textContent = `${year}`; // Добавляем текст в label
                        conteinerCheckbox.appendChild(label); // Добавляем label к yearBlock    
                    }
                    const currentYear = new Date().getFullYear();
                    for (let year = 1980; year <= currentYear; year++){
                        addYear(year)
                    }
                    conteinesCloseBtn.appendChild(btnCloseYear)

                })
            
            }





            form.appendChild(competitionCategory)
            competitionCategory.appendChild(sex)
            sex.appendChild(optionSex)
            sex.appendChild(optionMale)
            sex.appendChild(optionFemale)
            competitionCategory.appendChild(btnYear)
            competitionCategory.appendChild(roundAmount)
            competitionCategory.appendChild(roundLenght)
            competitionCategory.appendChild(personWeight)

}


export {competitionPost}