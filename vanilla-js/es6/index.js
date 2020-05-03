// const h1 = document.getElementById("MyBodyH1");
// console.log(h1.innerHTML);
// h1.innerHTML = "abc";
// console.log(h1.innerText);
const h1 = document.querySelector("h1");
h1.innerHTML = "abcdef";


// function handleResize(event) {
//     console.log("Resizing");
//     console.log(event);
// }
// window.addEventListener("resize", handleResize);

// const BASE_COLOR = h1.style.color;
const CLICKED_CLASS = "clicked";
function handleClick(event) {
    //     if (h1.style.color === BASE_COLOR)
    //         h1.style.color = "black";
    //     else
    //         h1.style.color = BASE_COLOR;
    //     console.log(event);

    // const hasClass = h1.classList.contains(CLICKED_CLASS);
    // if (hasClass)
    //     h1.classList.remove(CLICKED_CLASS);
    // else
    //     h1.classList.add(CLICKED_CLASS);

    h1.classList.toggle(CLICKED_CLASS);
}
h1.addEventListener("click", handleClick);