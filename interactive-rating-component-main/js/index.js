const mainCard = document.querySelector('.card-main')
const thanksCard = document.querySelector('.card-thanks')
const submitButton = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")


submitButton.addEventListener("click", () => {
    thanksCard.classList.remove("hidden")
    mainCard.style.display = "none"
})

rateAgain.addEventListener("click", () => {
    thanksCard.classList.add("hidden")
    mainCard.style.display = "block"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})

