// import { form } from "./adminPanel.js";


function competitionPost(){
            form.classList.remove("formContent")
            form.classList.add("competitionBlock")

            const competitionForm = document.createElement("div")

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

            const competitionCategory = document.createElement("div")
            competitionCategory.classList.add("competitionForm")
            competitionCategory.classList.add("competitionCategory")

            const sex = document.createElement("select")

            const optionSex = document.createElement("option")
            optionSex.text = "Dzimums";
            optionSex.value = "choise"; 
            const optionMale = document.createElement("option")
            optionMale.text = "Virietis";
            optionMale.value = "male"; 
            const optionFemale = document.createElement("option")
            optionFemale.text = "Sieviete";
            optionFemale.value = "female";

            const year = document.createElement("input")


            form.appendChild(competitionCategory)
            competitionCategory.appendChild(sex)
            sex.appendChild(optionSex)
            sex.appendChild(optionMale)
            sex.appendChild(optionFemale)
}


export {competitionPost}