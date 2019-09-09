const spanText = document.querySelector(".text");
const spnCursor = document.querySelector('.cursor')
const txt = ["Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim", "ipsam quidem. Ea perferendis mollitia sunt modi dolorem sapiente vitae", "dolores nostrum asperiores nihil! Molestiae delectus cupiditate repellendus ipsam minus, eveniet  aut sunt nostrum!", "Laboriosam cupiditate quisquam amet saepe modi", "quae tenetur perspiciatis magnam!"]
let activeLetter = -15
let activeText = 0


let indexText = 0;
const time = 50

const addLetter = () => {
    if (activeLetter >= 0){
        spanText.textContent += txt[activeText][activeLetter];
    }
   activeLetter++
   if (activeLetter === txt[activeText].length) {
       activeText++
       if (activeText === txt.length){
           return
       }
       return setTimeout(()=> {
           activeLetter = -15
           spanText.textContent =''
           addLetter()
       }, 2000)
   }
   setTimeout(addLetter,100)




    // indexText++;
    // if (indexText == txt.length) clearInterval(indexTyping);
};

const cursorAnimation = () => {
    spnCursor.classList.toggle('active')
}
addLetter()
// const indexTyping = setInterval(addLetter, time);
setInterval(cursorAnimation, 400)
