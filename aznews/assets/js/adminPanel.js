const newsPostBtn = document.getElementById("newsPost")
const competitionPostBtn = document.getElementById("competitionPost")
const seminarPostBtn = document.getElementById("seminarPost")
const calendarBtn = document.getElementById("calendar")
const addFormNews = document.getElementById("form")


function openForm(button, add){
    button.addEventListener("click", ()=>{
        while (add.firstChild) {
            add.removeChild(add.firstChild);
        }
        const form = document.createElement("form")
        add.appendChild(form)

        isClicked = button

        if(isClicked === newsPostBtn){
            const name = document.createElement("input")
            name.type = "text";
            name.placeholder = "Virsraksts";
            const file = document.createElement("input")
            file.type = "file"
            const date = document.createElement("input")
            date.type = "date";
        
            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(date)
        }else if(isClicked === competitionPostBtn){
            const name = document.createElement("input")
            name.type = "text";
            name.placeholder = "Virsraksts";
            const file = document.createElement("input")
            file.type = "file"
            const date = document.createElement("input")
            date.type = "date";

            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(date)
        }else if(isClicked === seminarPostBtn){
            const name = document.createElement("input")
            name.type = "text";
            name.placeholder = "Virsraksts";
            const text = document.createElement("input")
            text.type = "text";
            text.placeholder = "text";
            text.width = "fit-content";
            const file = document.createElement("input")
            file.type = "file";
            const date = document.createElement("input")
            date.type = "date";
        
        
            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(text)
            form.appendChild(date)
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
        }
    })
}

openForm(newsPostBtn, addFormNews)
openForm(competitionPostBtn, addFormNews)
openForm(seminarPostBtn, addFormNews)
openForm(calendarBtn, addFormNews)