
function textarea(){
    const textContent = document.createElement("textarea")
    textContent.setAttribute("id", "summernote");
    textContent.classList.add("text");
    textContent.classList.add("visual");
    textContent.placeholder = "text";
    
    add.appendChild(textContent)

    // br on enter

textContent.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // Предотвращаем переход на новую строку по умолчанию
        const startPosition = this.selectionStart;
        const endPosition = this.selectionEnd;
        const textBefore = this.value.substring(0, startPosition);
        const textAfter = this.value.substring(endPosition);
        this.value = textBefore + "<br>\n" + textAfter;
        this.selectionStart = startPosition + 5; // Установите новую позицию курсора после <br>
        this.selectionEnd = this.selectionStart;
    }
    const btnSubmit = document.createElement("button")
    btnSubmit.classList.add("visual")
    btnSubmit.textContent = "submit"
    btnSubmit.addEventListener("click", ()=>{
    //backend

    const newsNameInput = document.getElementById("newsName"); // Получаем элемент input по его id
    const newsName = newsNameInput.value; // Получаем значение из input

    alert("Значение из input: " + newsName); // Показываем значение в alert
})
add.appendChild(btnSubmit)
});
}





export {textarea}