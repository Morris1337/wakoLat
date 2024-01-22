import {competitionPost, category} from "./adminPanelCompetitionPost.js";
import {newsPost} from "./adminPanelNewsPost.js";
import {textarea} from "./adminPanelTextarea.js";
import {seminarPost} from "./adminPanelSeminarPost.js";
import {calendar} from "./adminPanelCalendar.js";

const newsPostBtn = document.getElementById("newsPost")
const competitionPostBtn = document.getElementById("competitionPost")
const seminarPostBtn = document.getElementById("seminarPost")
const calendarBtn = document.getElementById("calendar")
const addFormNews = document.getElementById("form")


const textElements = document.querySelectorAll(".text");

let isFirstRender = true;

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

function openForm(button, add) {

    const textareaElement = document.getElementById("summernote");

    button.addEventListener("click", () => {
        while (add.firstChild) {
            add.removeChild(add.firstChild);
        }

        const form = document.createElement("form");
        form.classList.add("formContent");
        add.appendChild(form);

        let isClicked = button;

        if (isClicked === newsPostBtn) {
            newsPost()
            textarea()
        } else if (isClicked === competitionPostBtn) {
            competitionPost()
            category(isFirstRender)
            isFirstRender = false;
            textarea()
        } else if (isClicked === seminarPostBtn) {
            seminarPost()
            textarea()
        } else {
            calendar()
        }
    })
}

newsPost()
textarea()

const fontBtns = document.querySelectorAll(".dropdown-toggle")
fontBtns.forEach((fontBtn) => {
    if (fontBtns.length === 1) {
        fontBtn.style.width = "100px"; // Обратите внимание на единицы измерения (например, пиксели)
    } else {
        fontBtns.style.width = "40px";
    }
});
