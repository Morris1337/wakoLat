const newsPostBtn = document.getElementById("newsPost")
const competitionPostBtn = document.getElementById("competitionPost")
const seminarPostBtn = document.getElementById("seminarPost")
const calendarBtn = document.getElementById("calendar")
const addFormNews = document.getElementById("form")
const conteinerForm = document.getElementById("conteiner-form")

const textElements = document.querySelectorAll(".text");

textElements.forEach(function (textElement) {
  textElement.addEventListener('input', function () {
    this.style.height = 'auto'; // Сброс высоты
    this.style.height = this.scrollHeight + 'px'; // Установка новой высоты
  });
});


document.addEventListener("DOMContentLoaded", () => {
    openForm(newsPostBtn, addFormNews, textElements);
    openForm(competitionPostBtn, addFormNews, textElements)
    openForm(seminarPostBtn, addFormNews, textElements)
    openForm(calendarBtn, addFormNews, textElements)
});

function openForm(button, add){
    button.addEventListener("click", ()=>{
        while (add.firstChild) {
            add.removeChild(add.firstChild);
        }
        const form = document.createElement("form")
        form.classList.add("formContent")
        add.appendChild(form)

        const textContent = document.createElement("textarea")
        textContent.classList.add("text")
        textContent.classList.add("visual")
        textContent.type = "text";
        textContent.placeholder = "text";
        add.appendChild(textContent)

        let isClicked = button

        if(isClicked === newsPostBtn){
            const name = document.createElement("input")
            const file = document.createElement("input")
            const date = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
            date.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file"
            date.type = "date";
        
            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(date)

        }else if(isClicked === competitionPostBtn){
            const name = document.createElement("input")
            const file = document.createElement("input")
            const country = document.createElement("input")
            const city = document.createElement("input")
            const eMail = document.createElement("input")
            const phone = document.createElement("input")
            const date = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
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

            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(country)
            form.appendChild(city)
            form.appendChild(eMail)
            form.appendChild(phone)
            form.appendChild(date)
        }else if(isClicked === seminarPostBtn){
            const name = document.createElement("input")
            const file = document.createElement("input")
            const date = document.createElement("input")
            const contactPerson = document.createElement("input")
            const contactPhone = document.createElement("input")
            const eMail = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
            eMail.classList.add("visual")
            date.classList.add("visual")
            contactPerson.classList.add("visual")
            contactPhone.classList.add("visual")
            eMail.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file";
            date.type = "date";
            contactPhone.type = "phone"
            eMail.placeholder = "E-Mail"
        
            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(date)
            form.appendChild(contactPerson)
            form.appendChild(contactPhone)
            form.appendChild(eMail)
        }else{
            const classWako = document.createElement("input")
            const date1 = document.createElement("input")
            const date2 = document.createElement("input")
            const name = document.createElement("input")
            const country = document.createElement("input")
            const venue = document.createElement("input")
            const city = document.createElement("input")
            const webAdress = document.createElement("input")
            const promoter = document.createElement("input")
            const eMail = document.createElement("input")
            const phone = document.createElement("input")

            classWako.classList.add("visual")
            date1.classList.add("visual")
            date2.classList.add("visual")
            name.classList.add("visual")
            country.classList.add("visual")
            venue.classList.add("visual")
            city.classList.add("visual");
            webAdress.classList.add("visual");
            promoter.classList.add("visual")
            eMail.classList.add("visual");
            phone.classList.add("visual")

            classWako.type = "text";
            classWako.placeholder = "Virsraksts";
            date1.type = "date";
            date2.type = "date";
            name.placeholder = "Name"
            country.placeholder = "Country"
            venue.placeholder = "Venue"
            city.placeholder = "City"
            webAdress.placeholder = "WEB Adress"
            promoter.placeholder = "Promoter"
            eMail.placeholder = "E-Mail"
            phone.placeholder = "Phone Number"

            form.appendChild(classWako)
            form.appendChild(date1)
            form.appendChild(date2)
            form.appendChild(name)
            form.appendChild(country)
            form.appendChild(venue)
            form.appendChild(city)
            form.appendChild(webAdress)
            form.appendChild(promoter)
            form.appendChild(eMail)
            form.appendChild(phone)
        }
    })
}


// function openForm(button, add){
//     button.addEventListener("click", ()=>{
//         while (add.firstChild) {
//             add.removeChild(add.firstChild);
//         }
//         const textContent = document.createElement("textarea")
//         textContent.classList.add("text")
//         textContent.classList.add("visual")
//         textContent.type = "text";
//         textContent.placeholder = "text";
//         add.appendChild(form)
//     })
// }