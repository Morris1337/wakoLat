document.addEventListener("DOMContentLoaded", function() {
    const buttonList = document.querySelectorAll(".rules");
    const contentList = document.querySelectorAll(".content");
    const noteikumiPdf = document.querySelectorAll(".noteikumiPdf");
    const dopingPdf = document.querySelectorAll(".dopingsPdf");
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

    // let isOpenCategory = true;
    liBlockList.forEach((elem) => {
        elem.addEventListener("click", (event) => {
            const dataIndex = elem.getAttribute("data-index");
            blockVisible(dataIndex);
            event.preventDefault();
            // isOpenCategory = !isOpenCategory;
            // if(!isOpenCategory){
            //     elem.classList.add("active")
            // }else{
            //     elem.classList.remove("active")
            // }
        })
    })

    // Проверяем URL и открываем соответствующий блок контента
    const urlParams = new URLSearchParams(window.location.search);
    const dataIndexParam = urlParams.get('data-index');

    if (dataIndexParam !== null && dataIndexParam >= 0 && dataIndexParam < contentList.length) {
        blockVisible(dataIndexParam);
    }

    function wakoNoteikumi(){
        const pdfFiles = [
            "files/noteikumi/Full_contact_noteikumi_compressed.pdf",
            "files/noteikumi/K_1_noteikumi_compressed.pdf",
            "files/noteikumi/Kick_light_noteikumi_compressed.pdf",
            "files/noteikumi/WAKO_kikboksa_noteikumi_compressed.pdf",
            "files/noteikumi/WAKO_Rules_25_10_2022_compressed.pdf"
        ]
        noteikumiPdf.forEach((file, index)=>{
            file.addEventListener("click", ()=>{
                const selectFile = pdfFiles[index];
                window.open(selectFile, 'PDF Viewer', 'width=800,height=600');
            });
        })
    }
    wakoNoteikumi()

    function antiDoping(){
        const pdfFiles = [
            "files/Antidoping/wada-code-2021_lv.pdf",
            "files/Antidoping/aizliegtovielusaraksts1-1.pdf",
            "files/Antidoping/patiesssports_vecakuunbernubrosura_73x99mm_padomi-vecakiem-un-sportistiem.pdf",
            "files/Antidoping/patiesssports_sap_brosura_73x99mm_sportistu-un-atbalsta.per_.pdf"        
        ]
        dopingPdf.forEach((file, index)=>{
            file.addEventListener("click", ()=>{
                const selectedFile = pdfFiles[index];
                window.open(selectedFile, 'PDF Viewer', 'width=800,height=600');
            })
        })
    }
    antiDoping()
    
    
});


