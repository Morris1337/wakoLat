

// function seminarPost(){

//             const postName = document.createElement("h2")
//             postName.textContent = "Jauns seminars"
//             postName.classList.add("flex-center")
//             form.appendChild(postName)

//             const SeminarPostForm = document.createElement("form")
//             SeminarPostForm.classList.add("formContent")
//             form.classList.add("formContent")
//             const name = document.createElement("input")
//             const file = document.createElement("input")
//             const date = document.createElement("input")
//             const contactPerson = document.createElement("input")
//             const contactPhone = document.createElement("input")
//             const eMail = document.createElement("input")

//             name.classList.add("visual")
//             file.classList.add("visual")
//             file.classList.add("custom-file-upload")
//             file.classList.add("custom-file")
//             eMail.classList.add("visual")
//             date.classList.add("visual")
//             contactPerson.classList.add("visual")
//             contactPhone.classList.add("visual")
//             eMail.classList.add("visual")

//             name.type = "text";
//             name.placeholder = "Virsraksts";
//             file.type = "file";
//             date.type = "date";
//             contactPerson.placeholder = "Сontact Person"
//             contactPhone.placeholder = "Сontact Phone"
//             contactPhone.type = "phone"
//             eMail.placeholder = "E-Mail"
        
//             form.appendChild(SeminarPostForm)
//             SeminarPostForm.appendChild(name)
//             SeminarPostForm.appendChild(file)
//             SeminarPostForm.appendChild(date)
//             SeminarPostForm.appendChild(contactPerson)
//             SeminarPostForm.appendChild(contactPhone)
//             SeminarPostForm.appendChild(eMail)
// }

function seminarPost(){

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
    const contactPerson = document.createElement("input")
    const contactPhone = document.createElement("input")

    name.classList.add("visual")
    file.classList.add("visual")
    file.classList.add("custom-file-upload")
    country.classList.add("visual")
    city.classList.add("visual")
    eMail.classList.add("visual")
    phone.classList.add("visual")
    dateStart.classList.add("visual")
    contactPerson.classList.add("visual")
    contactPhone.classList.add("visual")

    name.type = "text";
    name.placeholder = "Virsraksts";
    file.type = "file";
    country.placeholder = "Country";
    city.placeholder = "City";
    eMail.placeholder = "E-Mail";
    phone.placeholder = "Phone Number";
    dateStart.type = "date";
    contactPerson.placeholder = "Сontact Person"
    contactPhone.placeholder = "Сontact Phone"

    form.appendChild(competitionForm)
    competitionForm.appendChild(name)
    competitionForm.appendChild(file)
    competitionForm.appendChild(country)
    competitionForm.appendChild(city)
    competitionForm.appendChild(eMail)
    competitionForm.appendChild(phone)
    competitionForm.appendChild(dateStart)
    competitionForm.appendChild(contactPerson)
    competitionForm.appendChild(contactPhone)

}

function seminarPayInfo(){
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

export {seminarPost, seminarPayInfo}