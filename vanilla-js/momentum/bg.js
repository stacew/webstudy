const body = document.querySelector("body");

const IMG_COUNT = 3;

// function handleImgLoad() {
//api?
// }

function paintImage(imgNumber) {
    const image = new Image();
    image.src = `C:/Users/chunr/사진/example/${imgNumber + 1}.png`
    image.classList.add("bgImage");
    body.appendChild(image);
    // body.prepend(image); 뭐임
    // image.addEventListener("loaded", handleImgLoad); api?
}

function genRandom() {
    const number = Math.floor(Math.random() * IMG_COUNT);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();