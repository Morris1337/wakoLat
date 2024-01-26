const docCategory = document.querySelectorAll(".rules")
const filesPdf = document.querySelectorAll(".noteikumiPdf")

// docCategory.forEach(())

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