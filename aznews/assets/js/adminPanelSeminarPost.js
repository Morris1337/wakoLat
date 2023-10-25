

function seminarPost(){

            const postName = document.createElement("h2")
            postName.textContent = "Jauns seminars"
            postName.classList.add("flex-center")
            form.appendChild(postName)

            const SeminarPostForm = document.createElement("form")
            SeminarPostForm.classList.add("formContent")
            form.classList.add("formContent")
            const name = document.createElement("input")
            const file = document.createElement("input")
            const date = document.createElement("input")
            const contactPerson = document.createElement("input")
            const contactPhone = document.createElement("input")
            const eMail = document.createElement("input")

            name.classList.add("visual")
            file.classList.add("visual")
            file.classList.add("custom-file-upload")
            file.classList.add("custom-file")
            eMail.classList.add("visual")
            date.classList.add("visual")
            contactPerson.classList.add("visual")
            contactPhone.classList.add("visual")
            eMail.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file";
            date.type = "date";
            contactPerson.placeholder = "Сontact Person"
            contactPhone.placeholder = "Сontact Phone"
            contactPhone.type = "phone"
            eMail.placeholder = "E-Mail"
        
            form.appendChild(SeminarPostForm)
            SeminarPostForm.appendChild(name)
            SeminarPostForm.appendChild(file)
            SeminarPostForm.appendChild(date)
            SeminarPostForm.appendChild(contactPerson)
            SeminarPostForm.appendChild(contactPhone)
            SeminarPostForm.appendChild(eMail)
}

export {seminarPost}