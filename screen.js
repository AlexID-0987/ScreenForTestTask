let magicButton=document.getElementById('magic')
let priceOne=document.getElementById('price-one')
let priceTwo=document.getElementById('price-two')
let priceThree=document.getElementById('price-three')
let textBurger=document.getElementById('textBurger')
let burger=document.getElementById('burger')
let timerButton=document.getElementById('timer')
let timerScreen=document.getElementById('timer-screen')
priceOne.innerText='$19 /month'
priceTwo.innerText='$59 /month'
priceThree.innerText='$89 /month'
let itemBank=1
let counter=1
let timeFunction=1
magicButton.onclick=function(){
    itemBank++
    choisePrace()
    return itemBank%2==0 ? priceOne.innerText='$10 /yearly':
    priceOne.innerText='$19 /month'
    
}
function choisePrace(){
    choisePraceThree()
    return itemBank%2==0 ? priceTwo.innerText='$30 /yearly':
    priceTwo.innerText='$59 /month'
}
function choisePraceThree(){
    return itemBank%2==0 ? priceThree.innerText='$50 /yearly':
    priceThree.innerText='$89 /month'
}
burger.onclick=function(){
    counter++
    let list="<li><ul>Products</ul><ul>Plans</ul><ul>Contacts</ul></li>"
    return  counter%2==0 ? textBurger.innerHTML=list:textBurger.innerText=""
}
timerButton.onclick=function(){
  setInterval(timeNow,1000)
  timeFunction++
  function timeNow(){
   return timeFunction%2==0 ? timerScreen.innerText="Today: " +new Date().toLocaleTimeString() :
   timerScreen.innerText=''
  }
}