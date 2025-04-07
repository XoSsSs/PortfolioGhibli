const canvas = document.querySelector('#Ecran')
let ctx = canvas.getContext('2d')
let px=0 //Position x
let py=0//Position y
let Limitx=290//limit du cadre axe x 290
let limity= 150//limit du cadre axe y 150
let coordonee=[]
const timer =100
let startx;
let start;

class Snake {
    constructor(positionX,positionY)
    {
        this.PositionX=positionX
        this.PositionY=positionY
        
    }
    dessin(){

            ctx.fillStyle='rgb(200,0,0)'
            ctx.fillRect(this.PositionX,this.PositionY,10,10)

    }
    limitx (){
        if (this.PositionX<0){
           return this.PositionX=Limitx
        }else if (this.PositionX>Limitx){
           return this.PositionX=0
        }else if(this.PositionY<0){
            return this.PositionY=limity
        }else if (this.PositionY>limity){
            return this.PositionY=0
        }
    }

    
}

function game (){
    dessin()


   setTimeout(game,1000) 
}
setInterval(()=>{game(),1000}) 
let head = new Snake(50,20)
let  queue = [head]
let headx= new Snake(20,30)

function changex (){
    setInterval(()=>{
        ctx.clearRect(head.PositionX,head.PositionY,10,10)
        head.PositionX+=valeur 
    },100)
   
}


function detection (){
    for(i in coordonee){
        if (head.PositionX+10>=coordonee[i][0] && head.PositionX<=coordonee[i][0]+10 && head.PositionY + 10 >= coordonee[i][1] && head.PositionY <= coordonee[i][1] + 10){
            ctx.clearRect(coordonee[i][0],coordonee[i][1],10,10)
            coordonee.pop()
            spawn (1)
            queue.push(new Snake(head.PositionX-10,head.PositionY))
            for (i in queue){
                console.log(queue[i])
                queue[i].dessin()
            }
        } 
    }
}

spawn(1)

window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowDown":
            clearInterval(start)
            start=null
            this.PositionY+=10
          break;
        case "ArrowUp":
            clearInterval(start)
            start=null
            head.directionY()
           
          break;
        case "ArrowLeft":
            clearInterval(start)
            start=null
            head.directionX()
            
          break;
        case "ArrowRight":
            
          break;
}});
function hasard(x){
        let num=parseInt(Math.floor(Math.random()*x))
        return num
}
 function spawn (x){
    for(i=0;i<x;i++){
        let latx = hasard(Limitx)
        let laty= hasard(limity)
        ctx.fillRect(latx,laty,10,10) 
         coordonee.push([latx,laty])

    }   
}
