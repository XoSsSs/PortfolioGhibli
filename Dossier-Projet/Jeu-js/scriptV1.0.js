const canvas = document.querySelector('#Ecran')
let ctx = canvas.getContext('2d')

let snakex=5
let snakey=5
let blocksize=10
let foodx=parseInt(Math.floor(Math.random()*290))
let foody=parseInt(Math.floor(Math.random()*150))

let speedx=0
let speedy=0
let xvalue=0
let yvalue=0

let Limitx=290
let limity= 150

function clear(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,500,500)
}
function dessin (){
    clear()
    ctx.fillStyle='red'
    ctx.fillRect(snakex,snakey,blocksize,blocksize)
    ctx.fillStyle='yellow'
    ctx.fillRect(foodx,foody,blocksize,blocksize)
    limitx(snakex,snakey)
    change()
    setInterval(()=>dessin(),1000)
}
function change (){
    snakex+=xvalue
    snakey+=yvalue
}
window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowDown":
            speedx=0
            speedy=-1
          break;
        case "ArrowUp":
            speedx=0
            speedy=1
          break;
        case "ArrowLeft":
            speedx=-1
            speedy=0
          break;
        case "ArrowRight":
            speedx=1
            speedy=0
          break;
}});

window.onload = function(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,500,500)
    ctx.fillStyle='red'
    ctx.fillRect(snakex,snakey,blocksize,blocksize)
    ctx.fillStyle='yellow'
    ctx.fillRect(foodx,foody,blocksize,blocksize)
    dessin()
}
function limitx (x,y){
    if (x<0){
       return snakex=Limitx
    }else if (x>Limitx){
       return snakex=0
    }else if(y<0){
        return snakey=limity
    }else if (y>limity){
        return snakey=0
    }
}
function game (){

}