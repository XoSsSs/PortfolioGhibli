const canvas = document.querySelector('#Ecran')

let ctx = canvas.getContext('2d')
let px=40 //Position x
let py=20//Position y
let clearPx 
let Limitx=290//limit du cadre axe x 290
let limity= 150//limit du cadre axe y 150
let coordonee=[]
let Big=10

spawn (1)
window.onload=()=>{
    clear()
    dessin(px,py,10,10)
    spawn(1)
}
const timer =700

let startx;
let start;
function dessin(Px,Py,La,Lo){
    ctx.fillStyle='rgb(200,0,0)'
    ctx.fillRect(Px,Py,La,Lo)
}

function directionx (){
    if(!start ){
        start= setInterval(()=>{
            clear()
            px+=10
            limitx(px)
            detection()
            dessin(px,py,Big,10)
            return cube
    },timer) 
    } 
}
function directionX (){  
    if(!start ){
        start= setInterval(()=>{
            clear()
            px-=10
            limitx(px)
            detection()
            cube=dessin(px,py,Big,10)

            return cube
    },timer) 
    }
   
}
function directiony (){
    if(!start){
        start= setInterval(()=>{
            clear()
            py+=10
            limitx(px,py)
            dessin(px,py,10,10)
            detection()
            cube=dessin(px,py,Big,10)
            return cube
    },timer)       
    }
    }
    function directionY (){
        if(!start){
            start= setInterval(()=>{
                clear()
                py-=10
                limitx(px,py)
                dessin(px,py,10,10)
                detection()
                dessin(px,py,Big,10)
                return cube
        },timer)       
        }
        }
window.addEventListener("keydown", function(e) {
    switch (e.key) {
        case "ArrowDown":
            clearInterval(start)
            start=null
            directiony()
          break;
        case "ArrowUp":
            
            clearInterval(start)
            start=null
            directionY()
          break;
        case "ArrowLeft":
            
            clearInterval(start)
            start=null
            directionX()
          break;
        case "ArrowRight":
            clearInterval(start)
            start=null
            directionx()
          break;
}});
function limitx (x,y){
    if (x<0){
       return px=Limitx
    }else if (x>Limitx){
       return px=0
    }else if(y<0){
        return py=limity
    }else if (y>limity){
        return py=0
    }
}
function hasard(x){
        let num=parseInt(Math.floor(Math.random()*x))
        return num
}
 function spawn (x){
    for(i=0;i<x;i++){
        let latx = hasard(Limitx)
        let laty= hasard(limity)
         dessin(latx,laty,10,10) 
         coordonee.push([latx,laty])

    }   
}

function clear(){
    ctx.fillStyle='black'
    ctx.fillRect(0,0,500,500)
}

function detection (){
        for(i in coordonee){
            if (px+Big>=coordonee[i][0] && px<=coordonee[i][0]+Big && py + Big >= coordonee[i][1] && py <= coordonee[i][1] + Big){
                ctx.clearRect(coordonee[i][0],coordonee[i][1],10,10)
                coordonee.pop()
                spawn (1)

            } 
        }

}
