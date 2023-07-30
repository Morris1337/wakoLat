// const prev = document.getElementsByClassName("prev")[0]
// const next = document.getElementsByClassName("next")[0]

// let slideIndex = 0;
// let slideTimer;
// showSlides();

// function showSlides(){

//     const slides = document.getElementsByClassName("slide");
// const dots = document.getElementsByClassName("dot");

//     let i;
//     for(i = 0; i < slides.length; i++){
//         slides[i].style.display = "none";
//     }

//     slideIndex++;
//     if(slideIndex > slides.length){
//         slideIndex = 1
//     }

//     for(i = 0; i < dots.length; i++){
//         dots[i].className = dots[i].className.replace(" active", " ");
//     }

//     slides[slideIndex - 1].style.display = "block";
//     dots[slideIndex - 1].className += " active";
//     slideTimer = setTimeout(showSlides, 5000);
// }


// prev.addEventListener("click", ()=>{
//     slideIndex -= 2;
//     clearTimeout(slideTimer);
//     showSlides();
// })


// const dots = document.getElementsByClassName("dot");

// const dotsArray = Array.from(dots);

// dotsArray.forEach((dot, index) => {
//     dot.addEventListener("click", () => {
//       slideIndex = index;
//       clearTimeout(slideTimer);
//       showSlides();
      
//     });
//   });

const slides = document.getElementsByClassName("slide")

function newBackground(){
    // slides[Math.floor(Math.random() * (slides.length + 1))]
    const randomIndex = Math.floor(Math.random() * slides.length);
    for (let i = 0; i < slides.length; i++){
        if(i === randomIndex){
            slides[i].style.display = "block";
        }else{
            slides[i].style.display = "none";
        }
    }
}

newBackground()