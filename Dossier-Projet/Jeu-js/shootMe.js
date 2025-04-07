const canvas = document.querySelector('#Ecran')
const body = document.getElementsByTagName('body')
const ctx = canvas.getContext('2d')
const cible = document.querySelector('#cible')
let starter = document.querySelector('.starter')
let button= document.querySelector('button')
let phrase= document.querySelector('h1')
let son = document.querySelector('audio')
let tir = document.querySelector('.Tir')
let score =0
let miss =0
let hasardx = 300 //parseInt(Math.floor(Math.random()*canvas.offsetWidth))
let hasardy =  300//parseInt(Math.floor(Math.random()*canvas.height))
let time =0
let start;
let temp;
let cpsS;

// afficher la cible dans le canvas 
// faire apparaitre la cible un peu partout 
// cliquer sur la cible pour qu'elle disparaise 
 ctx.drawImage(cible, hasardx, hasardy, canvas.width/10, canvas.height/10);
 ctx.strokeRect(hasardx, hasardy, canvas.width/10, canvas.height/10)
 ctx.strokeStyle='black'
 function  game (){
    ctx.fillStyle='red'
    ctx.font='30px Arial'
    ctx.fillText(score,2*10,1.6*20)
    if (time>=5){
        ctx.clearRect(0, 0, canvas.width, canvas.height) 
        cps(score,time)
         starter.style.display='flex'
         button.textContent='Rejouer'
         phrase.textContent='Tu as toucher '+score+' la cibles  en '+time+' seconde '+cpsS+' cps veux tu reassayer'
         time=0 
         score=0
         ctx.drawImage(cible, hasardx, hasardy, canvas.width/10, canvas.height/10);
         ctx.strokeRect(hasardx, hasardy, canvas.width/10, canvas.height/10)
         clearInterval(start)
         clearInterval(temp)
         temp=null
         start=null
      }
    }
 canvas.addEventListener('click',toucher)

 function toucher(event){
  
   let clickX =  event.clientX-canvas.offsetLeft//event.clientX - canvas.offsetLeft;
   let clickY=  event.clientY - canvas.offsetTop;// Math.abs((event.clientY-canvas.width))
 
     if (
        clickX >= hasardx - canvas.height / 10 &&
        clickX <= hasardx + canvas.width / 10 &&
        clickY >= hasardy - canvas.height / 10&&
        clickY <= hasardy + canvas.height / 10
     ){
        tir.play()
        
      
         score++
         hasardx = parseInt(Math.floor(Math.random()*canvas.width))
         hasardy = parseInt(Math.floor(Math.random()*canvas.height))
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.drawImage(cible, hasardx, hasardy, canvas.width/10, canvas.height/10);
         ctx.strokeRect(hasardx, hasardy, canvas.width/10, canvas.height/10)
        ctx.strokeStyle='black'
     }else if (clickX>hasardx || clickX<hasardx && clickY>hasardy || clickY<hasardy){
        miss++
     }
     
 }

 button.addEventListener('click',()=>{
    starter.style.display='none'
    son.play()
    time=0 
    score=0
    start = setInterval(game,100)
    temp= setInterval(()=>{
        time++
      
    },1000)
 })

// Dire a l'utilisateur si sont cps est bon ou pas 
function cps (click,temp){
    cpsS = click/temp
    return cpsS
}
// Chose a faire: Revoir le code pour qu'il soit plus propre pour etre plus facilement udatable 
// add miss score peut etre en enlevant la function toucher de la boucle game 
// add meilleur score 
 start = setInterval(game,100)
