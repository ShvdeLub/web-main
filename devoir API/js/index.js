import { btcPrice } from "./app.js"


async function a() {
    let e = await btcPrice()
    return e
}

console.log(a())

let display = document.getElementById("btcPrice")
display.textContent = btcPrice()