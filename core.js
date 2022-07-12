const h1 = document.querySelector("h1");
const arrayLetter = h1.innerText.split('')
let html = ""
arrayLetter.forEach(letter => {
    let classes = ''
    if(letter !== ' ') {
        classes = 'letter js-letter'
    }
    html = html + `<span class='${classes}'>${letter}</span>`
})

h1.innerHTML = html
const jsLetters = document.querySelectorAll(".js-letter")
jsLetters.forEach(node => {
    node.addEventListener("mouseover", function(event) {
        this.classList.add("active")
    })
    node.addEventListener("mouseout", function(event) {
        this.classList.remove("active")
    })
})