

function newsPost(){
    const name = document.createElement("input")
            const file = document.createElement("input")
            const date = document.createElement("input")

            name.setAttribute("id", "newsName"); //id для бекэнда

            name.classList.add("visual")
            file.classList.add("visual")
            date.classList.add("visual")

            name.type = "text";
            name.placeholder = "Virsraksts";
            file.type = "file"
            file.classList.add("custom-file-upload")
            date.type = "date";
        
            form.appendChild(name)
            form.appendChild(file)
            form.appendChild(date)

}

export {newsPost}