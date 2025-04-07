const canvas = document.getElementById("Ecran");
const ctx = canvas.getContext("2d");
let boxSize=10
let Limitx=290
let limity= 150
let snake =[]
snake[0]={x:0,y:0}
let valuex=0
let valuey=0
let food ={
  x:parseInt(Math.floor(Math.random()*290)),
  y:parseInt(Math.floor(Math.random()*110))
}

function game (){
  clear()
  ctx.fillStyle='yellow'
  ctx.fillRect(food.x,food.y,boxSize,boxSize)
  for (let i=0;i<snake.length;i++){
    
    ctx.fillStyle='red'
    ctx.fillRect(snake[i].x,snake[i].y,boxSize,boxSize)
    ctx.strokeStyle='white'
    ctx.strokeRect(snake[i].x,snake[i].y,boxSize,boxSize)
    
  }
  let snakeX=snake[0].x
  let snakeY=snake[0].y
  snake[0].x+=valuex
  snake[0].y+=valuey
 
  if (snake[0].x==food.x&&snake[0].y==food.y){
    food ={
      x:parseInt(Math.floor(Math.random()*290)),
      y:parseInt(Math.floor(Math.random()*110))
    }
 
  }else{
    snake.pop()
  }
  let newhead={
    x:snakeX,
    y:snakeY
  }
  snake.unshift(newhead)
  console.log(snake)

}

function clear(){
  ctx.fillStyle='black'
  ctx.fillRect(0,0,500,500)
}

window.addEventListener("keydown", function(e){

  if(e.key=='ArrowRight'){
    valuex=10
    valuey=0
  }
  else if (e.key=='ArrowLeft'){
    valuex=-10
    valuey=0
  }
  else if (e.key=='ArrowUp'){
    valuex=0
    valuey=-10
  }else if (e.key=='ArrowDown'){
    valuex=0
    valuey=10
  }
})

setInterval(()=>game(),100)