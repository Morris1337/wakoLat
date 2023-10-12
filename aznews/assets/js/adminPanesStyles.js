// export function styles(tag, place) {
//     const selectedText = place.value.substring(place.selectionStart, place.selectionEnd);
//     const tagStart = `<${tag}>`;
//     const tagEnd = `</${tag}>`;

//     // Проверяем, содержит ли выделенный текст уже тег
//     const alreadyContainsTag = selectedText.startsWith(tagStart) && selectedText.endsWith(tagEnd);

//     if (alreadyContainsTag) {
//         // Убираем тег
//         const newText = selectedText.slice(tagStart.length, -tagEnd.length);
//         const startPosition = place.selectionStart;
//         const endPosition = place.selectionEnd;
//         const textBefore = place.value.substring(0, startPosition);
//         const textAfter = place.value.substring(endPosition);
//         place.value = textBefore + newText + textAfter;
//         place.selectionStart = startPosition;
//         place.selectionEnd = startPosition + newText.length;
//     } else {
//         // Добавляем тег
//         const newText = `${tagStart}${selectedText}${tagEnd}`;
//         const startPosition = place.selectionStart;
//         const endPosition = place.selectionEnd;
//         const textBefore = place.value.substring(0, startPosition);
//         const textAfter = place.value.substring(endPosition);
//         place.value = textBefore + newText + textAfter;
//         place.selectionStart = startPosition + tagStart.length;
//         place.selectionEnd = startPosition + tagStart.length + selectedText.length;
//     }
// }

function createStyleButton(tag, label) {
    const btn = document.createElement("button");
    btn.setAttribute("class", "styles");
    btn.textContent = label;
    btn.addEventListener("click", () => {
        styles(tag, textContent);
    });
    stylesConteinter.appendChild(btn);
}

export {createStyleButton}