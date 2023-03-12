const changeButton = document.querySelector("#changebg");
const images = [ "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
const choosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${choosenImage}`;
document.body.appendChild(bgImage);

function changeBg(){
    const beforeImg = document.querySelector("img");
    const choosenImage = images[Math.floor(Math.random() * images.length)];
    beforeImg.src = `img/${choosenImage}`;
}

changeButton.addEventListener("click",changeBg);
