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
    elementImmagini += `<img src="${linkImmagine}">`;
}
document.getElementById("carousel").innerHTML = elementImmagini;