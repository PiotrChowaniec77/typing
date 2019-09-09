const spanText = document.querySelector(".text");
const spnCursor = document.querySelector('.cursor')
const txt =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ipsam quidem. Ea perferendis mollitia sunt modi dolorem sapiente vitae, dolores nostrum asperiores nihil! Molestiae delectus cupiditate repellendus ipsam minus, eveniet quis quisquam sequi ullam hic minima earum, aut sunt nostrum! Laboriosam cupiditate quisquam amet saepe modi quae tenetur perspiciatis magnam!";

let indexText = 0;
const time = 50

const addLetter = () => {
    spanText.textContent += txt[indexText];
    indexText++;
    if (indexText == txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
    spnCursor.classList.toggle('active')
}
const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400)
