document.addEventListener("DOMContentLoaded", function() {
    const buttonList = document.querySelectorAll(".rules");
    const contentList = document.querySelectorAll(".content");
    const liBlockList = document.querySelectorAll(".li-header-link");

    function blockVisible(blockIndex) {
        contentList.forEach((block) => {
            block.classList.remove("open");
        })
        contentList[blockIndex].classList.add("open");
    }

    buttonList.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            console.log(elem, index);
            blockVisible(index);
        })
    })

    liBlockList.forEach((elem) => {
        elem.addEventListener("click", (event) => {
            const dataIndex = elem.getAttribute("data-index");
            blockVisible(dataIndex);
            event.preventDefault();
        })
    })

    // Проверяем URL и открываем соответствующий блок контента
    const urlParams = new URLSearchParams(window.location.search);
    const dataIndexParam = urlParams.get('data-index');

    if (dataIndexParam !== null && dataIndexParam >= 0 && dataIndexParam < contentList.length) {
        blockVisible(dataIndexParam);
    }
});


function wakoNoteikumi(){
    // openBlock()
    filesPdf.forEach((file)=>{
        file.addEventListener("click", ()=>{
            const fileName = file.textContent || file.innerText;
            if(fileName === "Full contact noteikumi"){
                window.open("files/noteikumi/Full_contact_noteikumi.pdf", 'PDF Viewer', 'width=800,height=600');
            }else if (fileName === "K-1 noteikumi"){
                window.open("files/noteikumi/K_1_noteikumi.pdf", 'PDF Viewer', 'width=800,height=600');
            }else if(fileName === "Kick light noteikumi"){
                window.open("files/noteikumi/Kick_light_noteikumi.pdf", 'PDF Viewer', 'width=800,height=600');
            }else if(fileName === "WAKO kikboksa noteikumi"){
                window.open("files/noteikumi/WAKO_kikboksa_noteikumi.pdf", 'PDF Viewer', 'width=800,height=600');
            }else{
                window.open("files/noteikumi/WAKO_Rules_25_10_2022.pdf", 'PDF Viewer', 'width=800,height=600');
            }
        });
    })
}
wakoNoteikumi()



