const mainContainer = document.querySelector(".main-container")

const thanksContainer = document.querySelector(".thank-you")

const submitBtn = document.getElementById("submit-btn")

const rateAgainBtn = document.getElementById("rate-again-btn")

const rating = document.getElementById("rating")

submitBtn.addEventListener("click", function() {
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
;})

rateAgainBtn.addEventListener("click", function() {
    thanksContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
;})

const rates = document.querySelectorAll(".btn");

for (let i = 0; i < rates.length; i++) {
        rates[i].addEventListener("click", function() {
            rating.innerHTML = rates[i].innerHTML;
        })
    ;
}
    