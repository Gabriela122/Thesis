var tekst2 = document.querySelector("#tekst2")
var tekst1 = document.querySelector("#tekst1")

async function textDisplay1() {
    var t = performance.now()
    var txt2 = await textDisplay2()

    tekst2.style.display = txt2
    tekst1.style.display = "block"

    var time = performance.now() - t + 'milisekund'

    document.querySelector('#asyncTime').innerHTML = time
}

function textDisplay2() {
    return new Promise(resolve => setTimeout(() => { resolve('block') }, 0))
}