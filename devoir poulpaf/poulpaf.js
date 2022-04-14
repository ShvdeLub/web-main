init(10, 10, true)
displayStatus(life, money, awake)

//voilà voilà 

var life
var money
var awake
// fonction pour les caractéristiques de base -->

// fonction pour affecter une valeur par défaut à "money" et "life"

function init(p1, p2, p3) {
    life = p1
    money = p2
    awake = p3
}

let status
if (awake === true){
    status = "réveillé"
}
else {
    status ="endormi"
}


//fonction pour afficher les caractéristiques de Poulpaf

function displayStatus(life, money, awake){
    let listQuery = document.querySelectorAll("li")
    listQuery[0].textContent = `${life}`
    listQuery[1].textContent = `${money}`
    if (awake == true){
        listQuery[2].textContent = "réveillé"
    }
    else {
        listQuery[2].textContent = "endormi"
    }
}

function logBox(a) {
    let newDiv = document.createElement("div")
    let logs = document.createTextNode(a)
    newDiv.appendChild(logs)
    let div = document.getElementById("monstre")
    document.body.insertBefore(newDiv, div)

}


//actions + initialistation



let run = document.getElementById("1")
let slap = document.getElementById("2")
let work = document.getElementById("3")
let sleep = document.getElementById("4")
let eat = document.getElementById("5")
let kill = document.getElementById("6")
let resurect = document.getElementById("7")
let stats = document.getElementById("8")


sleep.addEventListener("click", ()=>{
    if (life == 0){
        console.log("poulpaf est mort")
        image.setAttribute("src", "img/mort.png")
        logBox("un mort dort pas zebi")
    }
    else{
        if (awake){
            image.setAttribute("src", "img/dodo.png")
            life +=2
            awake = false
            logBox("poulpaf est fatigué, il va au dodo")
            displayStatus(life, money, awake)
            setTimeout(function timer(){
                awake = true
                displayStatus(life, money, awake)
                image.setAttribute("src", "src/base.png")
                logBox("poulpaf est réveillé, prêt pour une nouvelle journée")
            },5000)
        }

        else {
            console.log("poulpaf dort déjà")
        }
    }
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

run.addEventListener("click", ()=>{
    if (life == 0){
        console.log("poulpaf est mort")
        image.setAttribute("src", "img/mort.png")
        logBox("un mort court pas zebi")
    }
    else {
        if (awake){
            image.setAttribute("src", "img/crevé.png")
            life -= 1
            logBox("poulpaf court comme un poulet sans tête")
        }
        else {
            console.log("poulpaf fait encore dodo")
            logBox("poulpaf fait encore dodo")
        }
    }
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

slap.addEventListener("click", ()=>{
    if (life == 0){
        console.log("poulpaf est mort")
        image.setAttribute("src", "img/mort.png")
        logBox("un mort se bagarre pas zebi")
    }
        else {
            if (awake){
                image.setAttribute("src","img/vnr.png")
                logBox("poulpaf part à la guerre, il est vénère")
                if (life>9) {
                    life-=3
                }
                else{life -= 2}
            }
            else {
                console.log("poulpaf fait encore dodo")
                logBox("poulpaf fait encore dodo")
            }
                
    }
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

work.addEventListener("click", ()=>{
    if (life == 0){
        console.log("poulpaf est mort")
        image.setAttribute("src", "img/mort.png")
        logBox("un mort travaille pas zebi")
    }
    else {
        if (awake){
            image.setAttribute("src", "img/taf.png")
            money += 2
            life -= 1
            logBox("poulpaf part au taff, il a besoin de moulaga")
        }
        else {
            console.log("poulpaf fait encore dodo")
            logBox("poulpaf fait encore dodo")
        }
    }
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})



eat.addEventListener("click", ()=>{
    if (life == 0){
        console.log("poulpaf est mort")
        image.setAttribute("src", "img/mort.png")
        logBox("un mort mange pas zebi")
    }
    else {
        if (awake){
            if (money > 0){
                image.setAttribute("src", "img/mange.png")
                money -= 1
                life += 2
                logBox("poulpaf grignote un hotdog au poisson, miam miom mium")
            }
            if (money == 0) {
                console.log("poulpaf est fauché")
                logBox("poulpaf est fauché, ARBEIT")
            }
            }
        else {
            console.log("poulpaf fait encore dodo")
            logBox("poulpaf fait encore dodo")
        }

        
    }
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

kill.addEventListener("click", ()=>{
    image.setAttribute("src", "img/mort.png")
    life = 0
    money = 0
    logBox("tu as assassiné poulpaf, t'en content maintenant ?")
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

resurect.addEventListener("click", ()=>{
    image.setAttribute("src", "img/base.png")

    life = 10
    money = 10
    console.log(life, money, awake)
    displayStatus(life, money, awake)
})

stats.addEventListener("click", ()=>{
    window.alert("life = "+ life +" ,"+ "money ="+ money +" ,"+ "awake"+" "+ awake)
})
