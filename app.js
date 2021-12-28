let num = document.querySelector('.number');
let count = 0  ,clear;


document.querySelector('.start').addEventListener('click',() =>{
   clear =   setInterval(increasement,1000)
})
document.querySelector('.stop').addEventListener('click',() =>{
   clearInterval(clear)
})
document.querySelector('.reset').addEventListener('click',() =>{
   count = 0
   num.innerHTML = count + ' sec'
 })
 
 
function increasement() {
    count++
    num.innerHTML = count + ' sec'
}