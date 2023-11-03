const arrayImmagini = [
    "https://picsum.photos/id/237/900/400", 
    "https://picsum.photos/id/238/900/400",
    "https://picsum.photos/id/239/900/400",
    "https://picsum.photos/id/240/900/400",
    "https://picsum.photos/id/241/900/400",
    "https://picsum.photos/id/242/900/400",

];

let elementImmagini = "";
for (let i = 0; i < arrayImmagini.length; i++) {
    const linkImmagine = arrayImmagini[i];
    elementImmagini += `<img class="wait wideFull" src="${linkImmagine}">`;
    
}
document.getElementById("carousel").innerHTML = elementImmagini;


let currentImg = 0;
const images = document.querySelectorAll("#carousel img");
images[currentImg].classList.remove("wait");
images[currentImg].classList.add("active");


document.getElementById("nextBtn").addEventListener("click", function () {
    
    if (currentImg < images.length - 1) {
        images[currentImg].classList.remove("active");
        images[currentImg].classList.add("wait");
        currentImg++;
        images[currentImg].classList.add("active");
        images[currentImg].classList.remove("wait");
    } else{
        images[currentImg].classList.remove("active");
        images[currentImg].classList.add("wait");
        currentImg = (0);
        images[currentImg].classList.add("active");
        images[currentImg].classList.remove("wait");
        
    }
});

document.getElementById("prevBtn").addEventListener("click", function () {
    
    if (currentImg > 0) {
        images[currentImg].classList.remove("active");
        images[currentImg].classList.add("wait");
        currentImg--;
        images[currentImg].classList.add("active");
        images[currentImg].classList.remove("wait");
    }else {
        images[currentImg].classList.remove("active");
        images[currentImg].classList.add("wait");
        currentImg = (images.length - 1);
        images[currentImg].classList.add("active");
        images[currentImg].classList.remove("wait");
    }
});

const array2Immagini = [
    "img/01.webp",
    "img/02.webp",
    "img/03.webp",
    "img/04.webp",
    "img/05.webp",
]

let element2Immagini = "";
let elementMiniImmagini = "";

for (let i = 0; i < array2Immagini.length; i++) {
    const link2Immagine = array2Immagini[i];
    element2Immagini += `<img id="midWidth" class="wait wideMid" src="${link2Immagine}">`;
    elementMiniImmagini += `<img class="widemini" src="${link2Immagine}">`;
    
}
document.getElementById("carouselMin").innerHTML += element2Immagini;
document.getElementById("miniSide").innerHTML = elementMiniImmagini;

let current2Img = 0;
const images2 = document.querySelectorAll("#midWidth");
images2[current2Img].classList.remove("wait");
images2[current2Img].classList.add("active");

document.getElementById("nextMinBtn").addEventListener("click", function () {
    
    if (current2Img < images2.length - 1) {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        current2Img++;
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
    } else{
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        current2Img = (0);
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
        
    }
});

document.getElementById("prevMinBtn").addEventListener("click", function () {
    
    if (current2Img > 0) {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        current2Img--;
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
    }else {
        images2[current2Img].classList.remove("active");
        images2[current2Img].classList.add("wait");
        current2Img = (images2.length - 1);
        images2[current2Img].classList.add("active");
        images2[current2Img].classList.remove("wait");
    }
});
