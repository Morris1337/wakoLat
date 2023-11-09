
function textarea(){

    // const summernote = document.createElement("div")
    // summernote.setAttribute("id", "summernote");
    // form.appendChild(summernote)

    const textContent = document.createElement("textarea")
    textContent.setAttribute("id", "textarea");
    textContent.classList.add("text");
    textContent.classList.add("visual");
    textContent.placeholder = "text";
    
    form.appendChild(textContent)


    const btnSubmit = document.createElement("button")
    btnSubmit.classList.add("visual")
    btnSubmit.textContent = "submit"
    btnSubmit.addEventListener("click", ()=>{
  
    })
    form.appendChild(btnSubmit)

    $(document).ready(function() {
        $('#textarea').summernote(); // Замените '#summernote' на селектор вашего текстового редактора
      });
}


export {textarea}