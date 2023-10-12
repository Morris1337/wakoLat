

// Стили для текста

const stylesConteinter = document.createElement("div")
stylesConteinter.setAttribute("class", "stylesConteinter")
form.appendChild(stylesConteinter)

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


export {styles, createStyleButton, createSelectWithRadios, sizeOpt,
    selectWithRadios, createSelectTextCollor, textCollor}