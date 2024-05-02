// accordian

let accordian = document.querySelectorAll(".full-part")
let img = document.querySelector(".accord-img");
let txt = document.querySelector(".accord-para");
img.style.transform = "rotate(180deg)";
txt.style.display = "block";
accordian.forEach(element => {
    let img = element.querySelector(".accord-img");
    let clicable = element.querySelector(".top-part");
    let txt = element.querySelector(".accord-para");
    clicable.addEventListener("click", () => {
        let disp_text = window.getComputedStyle(txt).display;
        accordian.forEach(otherelement => {
            if (otherelement !== element) {
                let txt = otherelement.querySelector(".accord-para");
                let img = otherelement.querySelector(".accord-img");
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
            if (disp_text === "none") {
                txt.style.display = "block";
                img.style.transform = "rotate(180deg)";
            } else {
                txt.style.display = "none";
                img.style.transform = "rotate(0deg)";
            }
        });
    });
});

// NavBar

const menuIcon = document.querySelector(".menuIcon");
const menuList = document.querySelector(".smView");
menuIcon.addEventListener("click", () => {
    menuList.classList.toggle("show");
    document.querySelector("nav").classList.toggle("navbg");
    document.querySelector("body").classList.toggle("overflow-hidden");
})

// countdown

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 19);
targetDate.setHours(targetDate.getHours() + 10);
targetDate.setMinutes(targetDate.getMinutes() + 2);
targetDate.setSeconds(targetDate.getSeconds() + 5);
function updateCountdown() {
    const now = new Date();
    const timeLeft = targetDate - now;
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = `${days}d:${hours}hr:${minutes}min:${seconds}sec`;
    if (timeLeft < 0) {
        clearInterval(timerInterval);
        countdownElement.textContent = "Countdown is over!";
    }
}
const timerInterval = setInterval(updateCountdown, 1000);