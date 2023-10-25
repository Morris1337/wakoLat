import {competitionPost} from "./adminPanelCompetitionPost.js";
import { newsPost } from "./adminPanelNewsPost.js";
import { textarea} from "./adminPanelTextarea.js";
import { seminarPost } from "./adminPanelSeminarPost.js";
import { calendar } from "./adminPanelCalendar.js";

const newsPostBtn = document.getElementById("newsPost")
const competitionPostBtn = document.getElementById("competitionPost")
const seminarPostBtn = document.getElementById("seminarPost")
const calendarBtn = document.getElementById("calendar")
const addFormNews = document.getElementById("form")


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

    const textareaElement = document.getElementById("summernote");

    button.addEventListener("click", () => {
        while (add.firstChild) {
            add.removeChild(add.firstChild);
        }
    
        const form = document.createElement("form");
        form.classList.add("formContent");
        add.appendChild(form);
    
        // Стили для текста
    
        // const stylesContainer = document.createElement("div");
        // stylesContainer.classList.add("stylesContainer");
        // add.appendChild(stylesContainer);
    
        // createStyleButton("h1", "Header 1");
        // createStyleButton("h2", "Header 2");
        // // Добавьте другие стили, которые вам нужны
    
        // function styles(tag, textareaElement) {
        //     const selectedText = textareaElement.value.substring(textareaElement.selectionStart, textareaElement.selectionEnd);
        //     const tagStart = `<${tag}>`;
        //     const tagEnd = `</${tag}>`;
    
        //     // Проверяем, содержит ли выделенный текст уже тег
        //     const alreadyContainsTag = selectedText.startsWith(tagStart) && selectedText.endsWith(tagEnd);
    
        //     if (alreadyContainsTag) {
        //         // Убираем тег
        //         const newText = selectedText.slice(tagStart.length, -tagEnd.length);
        //         const startPosition = textareaElement.selectionStart;
        //         const endPosition = textareaElement.selectionEnd;
        //         const textBefore = textareaElement.value.substring(0, startPosition);
        //         const textAfter = textareaElement.value.substring(endPosition);
        //         textareaElement.value = textBefore + newText + textAfter;
        //         textareaElement.selectionStart = startPosition;
        //         textareaElement.selectionEnd = startPosition + newText.length;
        //     } else {
        //         // Добавляем тег
        //         const newText = `${tagStart}${selectedText}${tagEnd}`;
        //         const startPosition = textareaElement.selectionStart;
        //         const endPosition = textareaElement.selectionEnd;
        //         const textBefore = textareaElement.value.substring(0, startPosition);
        //         const textAfter = textareaElement.value.substring(endPosition);
        //         textareaElement.value = textBefore + newText + textAfter;
        //         textareaElement.selectionStart = startPosition + tagStart.length;
        //         textareaElement.selectionEnd = startPosition + tagStart.length + selectedText.length;
        //     }
        // }
        
        // function createStyleButton(tag, label) {
        //     const btn = document.createElement("button");
        //     btn.classList.add("styles");
        //     btn.textContent = label;
        //     btn.addEventListener("click", () => {
        //         styles(tag, textareaElement);
        //     });
        //     stylesContainer.appendChild(btn);
        // }
        // // Select h1 - h5

        // function createSelectWithRadios(sizeOpt){
        //     const selectH = document.createElement("select")

        //     sizeOpt.forEach((size) =>{
        //         const choiseH = document.createElement("option")
        //         choiseH.textContent = size.toUpperCase();
        //         choiseH.value = size;
        //         selectH.appendChild(choiseH)
        //     });

        //     selectH.addEventListener("change", ()=>{
        //         const selectSize = selectH.value
        //         styles(selectSize, textContent)
        //     })
            
        //     return selectH
        // }
        // const sizeOpt = ["h1", "h2", "h3", "h4", "h5"]
        // const selectWithRadios = createSelectWithRadios(sizeOpt)

        // stylesContainer.appendChild(selectWithRadios)

        // // TextColor

        // function changeTextColor(color, place) {
        //     const selectedText = place.value.substring(place.selectionStart, place.selectionEnd);
        //     const newText = `<span style="color:${color};">${selectedText}</span>`;
        //     const startPosition = place.selectionStart;
        //     const endPosition = place.selectionEnd;
        //     const textBefore = place.value.substring(0, startPosition);
        //     const textAfter = place.value.substring(endPosition);
        //     place.value = textBefore + newText + textAfter;
        //     place.selectionStart = startPosition;
        //     place.selectionEnd = startPosition + newText.length;
        // }

        // function createSelectTextCollor(textCollor) {
        //     const selectTextCollor = document.createElement("select");
        
        //     textCollor.forEach((color) => {
        //         const choiseTextCollor = document.createElement("option");
        //         choiseTextCollor.textContent = color.toUpperCase();
        //         choiseTextCollor.value = color;
        //         selectTextCollor.appendChild(choiseTextCollor);
        //     });
        
        //     selectTextCollor.addEventListener("change", () => {
        //         const selectedColor = selectTextCollor.value;
        //         changeTextColor(selectedColor, textContent); // Изменить цвет текста
        //     });
        
        //     return selectTextCollor;
        // }
        
        // const textCollor = ["red", "blue", "green", "yellow", "black"];
        // const selectTextCollor = createSelectTextCollor(textCollor);
        
        // stylesContainer.appendChild(selectTextCollor);
        


        let isClicked = button

        if(isClicked === newsPostBtn){
            newsPost()
            textarea()


        }else if(isClicked === competitionPostBtn){
            competitionPost()
            textarea()

        }else if(isClicked === seminarPostBtn){
            seminarPost()
            textarea()
            
        }else{
            calendar()
        }
    })
}

newsPost()
textarea()
