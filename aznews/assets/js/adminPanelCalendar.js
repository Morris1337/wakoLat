

function calendar(){

            const postName = document.createElement("h2")
            postName.textContent = "Kalendars"
            postName.classList.add("flex-center")
            form.appendChild(postName)

            const calendarForm = document.createElement("form")
            calendarForm.classList.add("formContent")
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
            
            form.appendChild(calendarForm)
            calendarForm.appendChild(classWako)
            calendarForm.appendChild(date1)
            calendarForm.appendChild(date2)
            calendarForm.appendChild(name)
            calendarForm.appendChild(country)
            calendarForm.appendChild(venue)
            calendarForm.appendChild(city)
            calendarForm.appendChild(webAdress)
            calendarForm.appendChild(promoter)
            calendarForm.appendChild(eMail)
            calendarForm.appendChild(phone)
}

export {calendar}