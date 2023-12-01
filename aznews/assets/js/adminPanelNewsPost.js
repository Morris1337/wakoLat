function newsPost(){
    const postName = document.createElement("h2")
    postName.textContent = "Jauna publikacija"
    postName.classList.add("flex-center")
    form.appendChild(postName)
    const newsPostForm = document.createElement("form")
    newsPostForm.classList.add("formContent")
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

    form.appendChild(newsPostForm)
    newsPostForm.appendChild(name)
    newsPostForm.appendChild(file)
    newsPostForm.appendChild(date)

}

export {newsPost}
