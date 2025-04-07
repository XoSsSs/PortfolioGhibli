const canvas = document.querySelector('#Ecran')
const ctx = canvas.getContext('2d')
const buton = document.querySelector('button')
const starter = document.querySelector('#starter')
const result = document.querySelector('.result')
let box = 20 

let snake =[]
snake[0]={
    x:10*box,
    y:10*box
}

let food ={
    x:parseInt(Math.floor(Math.random()*15+1)*box),
    y:parseInt(Math.floor(Math.random()*15+1)*box)
  }

  let score = 0

  let d 

  // detection de la touche pour le mouvement 
  document.addEventListener("keydown",direction);

  
  function direction(event){
    let key = event.keyCode;

    if(key==37 && d !='RIGHT'){
        d='LEFT';
    }
    else if(key==38 && d!='DOWN'){
        d='UP';
    }else if(key==39 && d!='LEFT'){
        d='RIGHT';
    }else if (key==40&&d!='UP'){
        d='DOWN';
    }

  }
  function Draw (){
    ctx.clearRect(0,0,400 ,400)
    for(let i=0;i<snake.length;i++){
        ctx.fillStyle=(i==0)? 'green':'red'
        ctx.fillRect(snake[i].x,snake[i].y,box,box)
        ctx.strokeStyle='white' // dessine le bord du rectangle en blanc 
        ctx.strokeRect(snake[i].x,snake[i].y,box,box)
    }
    ctx.fillStyle='yellow'
    ctx.fillRect(food.x,food.y,box,box)

    let snakex=snake[0].x
    let snakey=snake[0].y
    // Mouvement de la tete du serpent avec la variable d 
    if(d=='LEFT') snakex-=box
    if(d=='UP') snakey-=box
    if(d=='RIGHT') snakex+=box
    if(d=='DOWN') snakey+=box

    if(snakex==food.x && snakey==food.y){
        score++
        food ={
            x:parseInt(Math.floor(Math.random()*15+1)*box),
            y:parseInt(Math.floor(Math.random()*15+1)*box)
          }
    }else{
       snake.pop()
    }

    let newHead={
        x:snakex,
        y:snakey
    }
   
    if (newHead.x<0){
        newHead.x=400
        
    }else if (newHead.x>400){
        newHead.x=0
    }else if (newHead.y<0){
        newHead.y=400
    }else if (newHead.y>400){
        newHead.y=0
    }
   
    
        
    snake.unshift(newHead);
    collision(newHead,snake)

    
    ctx.fillStyle='red'
    ctx.font='30px Arial'
    ctx.fillText(score,2*box,1.6*box)
    function collision (head,array){
        
        for(let y=1;y<array.length;y++){
            console.log(array[y])
            if(head.x>=array[y].x && head.x<=array[y].x && head.y>=array[y].y && head.y<=array[y].y){
                clearInterval(gameS)
                gameS=null
                starter.style.display='flex'
                buton.textContent='Rejouer'
                result.textContent='Tu as perdu ton score est de '+score
            }
            
        }
    }
  }
  

  function reassayer (){
    let re= confirm('TU AS PERDU VEUX TU REESAYER ')
    if (re==true){
        snake=[]
        score=0
        snake[0]={
            x:10*box,
            y:10*box
        }
        gameS = setInterval(Draw,100)
    }else if  (re==false){
        clearInterval(gameS)
    }
  }

  buton.addEventListener('click',()=>{
    starter.style.display='none'
    snake=[]
    snake[0]={
        x:10*box,
        y:10*box
    }
    score = 0
    gameS = setInterval(Draw,100)
  })