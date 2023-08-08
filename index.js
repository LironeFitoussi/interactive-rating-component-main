const mainContainer = document.querySelector(".main-container")

const thanksContainer = document.querySelector(".thank-you")

const submitBtn = document.getElementById("submit-btn")

const rateAgainBtn = document.getElementById("rate-again-btn")

submitBtn.addEventListener("click", function() {
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
;})

rateAgainBtn.addEventListener("click", function() {
    thanksContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
;})