var on=document.getElementById("on")
var off=document.getElementById("off")
var lamba=document.getElementById("lamba")
var img= document.getElementById("img")
console.log(on)
console.log(off)
console.log(lamba)

on.addEventListener("click",lambaOn)
function lambaOn(){
   

    lamba.style.backgroundColor="red"
    img.src= "imgs/pic_bulbon.gif" 
   

}
off.addEventListener("click",lambaOff)
function lambaOff(){
   

    lamba.style.backgroundColor="yellow"
    img.src="imgs/pic_bulboff.gif"
   

}