import {competitionPost} from "./competitionPost.js";
import { textarea } from "./adminPanelTextarea.js";





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

        // Стили для текста

        const stylesConteinter = document.createElement("div")
        stylesConteinter.setAttribute("class", "stylesConteinter")
        add.appendChild(stylesConteinter)

        createStyleButton()
        
        function styles(tag, place) {
            const selectedText = place.value.substring(place.selectionStart, place.selectionEnd);
            const tagStart = `<${tag}>`;
            const tagEnd = `</${tag}>`;
        
            // Проверяем, содержит ли выделенный текст уже тег
            const alreadyContainsTag = selectedText.startsWith(tagStart) && selectedText.endsWith(tagEnd);
        
            if (alreadyContainsTag) {
                // Убираем тег
                const newText = selectedText.slice(tagStart.length, -tagEnd.length);
                const startPosition = place.selectionStart;
                const endPosition = place.selectionEnd;
                const textBefore = place.value.substring(0, startPosition);
                const textAfter = place.value.substring(endPosition);
                place.value = textBefore + newText + textAfter;
                place.selectionStart = startPosition;
                place.selectionEnd = startPosition + newText.length;
            } else {
                // Добавляем тег
                const newText = `${tagStart}${selectedText}${tagEnd}`;
                const startPosition = place.selectionStart;
                const endPosition = place.selectionEnd;
                const textBefore = place.value.substring(0, startPosition);
                const textAfter = place.value.substring(endPosition);
                place.value = textBefore + newText + textAfter;
                place.selectionStart = startPosition + tagStart.length;
                place.selectionEnd = startPosition + tagStart.length + selectedText.length;
            }
        }
        
        function createStyleButton(tag, label) {
            const btn = document.createElement("button");
            btn.setAttribute("class", "styles");
            btn.textContent = label;
            btn.addEventListener("click", () => {
                styles(tag, textContent);
            });
            stylesConteinter.appendChild(btn);
        }

        // Select h1 - h5

        function createSelectWithRadios(sizeOpt){
            const selectH = document.createElement("select")

            sizeOpt.forEach((size) =>{
                const choiseH = document.createElement("option")
                choiseH.textContent = size.toUpperCase();
                choiseH.value = size;
                selectH.appendChild(choiseH)
            });

            selectH.addEventListener("change", ()=>{
                const selectSize = selectH.value
                styles(selectSize, textContent)
            })
            
            return selectH
        }
        const sizeOpt = ["h1", "h2", "h3", "h4", "h5"]
        const selectWithRadios = createSelectWithRadios(sizeOpt)

        stylesConteinter.appendChild(selectWithRadios)

        // TextColor

        function changeTextColor(color, place) {
            const selectedText = place.value.substring(place.selectionStart, place.selectionEnd);
            const newText = `<span style="color:${color};">${selectedText}</span>`;
            const startPosition = place.selectionStart;
            const endPosition = place.selectionEnd;
            const textBefore = place.value.substring(0, startPosition);
            const textAfter = place.value.substring(endPosition);
            place.value = textBefore + newText + textAfter;
            place.selectionStart = startPosition;
            place.selectionEnd = startPosition + newText.length;
        }

        function createSelectTextCollor(textCollor) {
            const selectTextCollor = document.createElement("select");
        
            textCollor.forEach((color) => {
                const choiseTextCollor = document.createElement("option");
                choiseTextCollor.textContent = color.toUpperCase();
                choiseTextCollor.value = color;
                selectTextCollor.appendChild(choiseTextCollor);
            });
        
            selectTextCollor.addEventListener("change", () => {
                const selectedColor = selectTextCollor.value;
                changeTextColor(selectedColor, textContent); // Изменить цвет текста
            });
        
            return selectTextCollor;
        }
        
        const textCollor = ["red", "blue", "green", "yellow", "black"];
        const selectTextCollor = createSelectTextCollor(textCollor);
        
        stylesConteinter.appendChild(selectTextCollor);

        // Textarea 

        // const textContent = document.createElement("textarea")
        // textContent.setAttribute("id", "summernote");
        // textContent.classList.add("text");
        // textContent.classList.add("visual");
        // textContent.placeholder = "text";

        // add.appendChild(textContent)

                // br on enter

        //         textContent.addEventListener("keydown", function (e) {
        //             if (e.key === "Enter") {
        //                 e.preventDefault(); // Предотвращаем переход на новую строку по умолчанию
        //                 const startPosition = this.selectionStart;
        //                 const endPosition = this.selectionEnd;
        //                 const textBefore = this.value.substring(0, startPosition);
        //                 const textAfter = this.value.substring(endPosition);
        //                 this.value = textBefore + "<br>\n" + textAfter;
        //                 this.selectionStart = startPosition + 5; // Установите новую позицию курсора после <br>
        //                 this.selectionEnd = this.selectionStart;
        //             }
        //         });
        
        // const btnSubmit = document.createElement("button")
        // btnSubmit.classList.add("visual")
        // btnSubmit.textContent = "submit"
        // btnSubmit.addEventListener("click", ()=>{
            
            //backend
            
        //     const newsNameInput = document.getElementById("newsName"); // Получаем элемент input по его id
        //     const newsName = newsNameInput.value; // Получаем значение из input

        //     alert("Значение из input: " + newsName); // Показываем значение в alert
        // })
        // add.appendChild(btnSubmit)
        


        let isClicked = button

        if(isClicked === newsPostBtn){
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

        }else if(isClicked === competitionPostBtn){
            competitionPost()
            textarea()

            // form.classList.remove("formContent")
            // form.classList.add("competitionBlock")

            // const competitionForm = document.createElement("div")

            // competitionForm.classList.add("competitionForm")
            
            // const file = document.createElement("input")
            // const name = document.createElement("input")
            // const country = document.createElement("input")
            // const city = document.createElement("input")
            // const eMail = document.createElement("input")
            // const phone = document.createElement("input")
            // const date = document.createElement("input")

            // name.classList.add("visual")
            // file.classList.add("visual")
            // file.classList.add("custom-file-upload")
            // country.classList.add("visual")
            // city.classList.add("visual")
            // eMail.classList.add("visual")
            // phone.classList.add("visual")
            // date.classList.add("visual")

            // name.type = "text";
            // name.placeholder = "Virsraksts";
            // file.type = "file"
            // country.placeholder = "Country"
            // city.placeholder = "City"
            // eMail.placeholder = "E-Mail"
            // phone.placeholder = "Phone Number"
            // date.type = "date";

            // form.appendChild(competitionForm)
            // competitionForm.appendChild(name)
            // competitionForm.appendChild(file)
            // competitionForm.appendChild(country)
            // competitionForm.appendChild(city)
            // competitionForm.appendChild(eMail)
            // competitionForm.appendChild(phone)
            // competitionForm.appendChild(date)

            // const competitionCategory = document.createElement("div")
            // competitionCategory.classList.add("competitionForm")
            // competitionCategory.classList.add("competitionCategory")

            // const sex = document.createElement("select")

            // const optionSex = document.createElement("option")
            // optionSex.text = "Dzimums";
            // optionSex.value = "choise"; 
            // const optionMale = document.createElement("option")
            // optionMale.text = "Virietis";
            // optionMale.value = "male"; 
            // const optionFemale = document.createElement("option")
            // optionFemale.text = "Sieviete";
            // optionFemale.value = "female";

            // const year = document.createElement("input")


            // form.appendChild(competitionCategory)
            // competitionCategory.appendChild(sex)
            // sex.appendChild(optionSex)
            // sex.appendChild(optionMale)
            // sex.appendChild(optionFemale)
        }else if(isClicked === seminarPostBtn){
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

