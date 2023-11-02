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
    elementImmagini += `<img class="wait" src="${linkImmagine}">`;
    
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