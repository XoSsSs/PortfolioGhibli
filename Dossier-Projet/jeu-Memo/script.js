let carte = document.querySelectorAll('#carte')

let image = document.querySelectorAll('img')
let chiffre= document.querySelectorAll('.chiffre')
let start = document.querySelector('button')
let starter = document.querySelector('.starter')
let face = document.querySelectorAll('.face')
let phrase = document.querySelector('h1')
let on = 0

start.addEventListener('click',()=>{
    starter.style.display='none'
    
})


// chaque carte un un element en plus 


let premier;
let choix;
let choix2;
let second;
let health = 13
let vie = health
let tabResponse = []
let conf;
melanger()
for (let i=0 ; i<carte.length;i++){
    
    // Melange les cartes 
    
    //************************ */

    carte[i].addEventListener('click',()=>{
       
        face[i].style.display="inline"
        
        on++
      if (on==1){
         premier = chiffre[i].outerText
         choix=i
      }else if(on==2){
        second=chiffre[i].outerText
        choix2=i
      }
      
        if (on>2){
            for (let i=0 ; i<carte.length;i++){
                face[i].style.display="none"
            } 
            if (choix==choix2){
                face[i].style.display="none"
            }else if (second==premier){
                tabResponse.push(face[choix],face[choix2])
            }else if (choix!=choix2){
                vie--
                loose()
            }
            for (let i=0;i<tabResponse.length;i++){
                tabResponse[i].style.display="inline"
                console.log(tabResponse.length)
                
            }
            on=0
            win()
        }
   
})}
function loose (){
    console.log(vie)
    if (vie==0){
                starter.style.display='inline'
                phrase.textContent='Tu a perdu tu veux rejouer'
                start.textContent='Rejouer'
                melanger ()
                for (let i=0;i<tabResponse.length;i++){
                    tabResponse[i].style.display="inline" 
                }
                vie=health
                tabResponse=[]
            }

    }

function win ()
{
    if(tabResponse.length==12){
                starter.style.display='inline'
                phrase.textContent='Tu a Gagner tu veux rejouer'
                start.textContent='Rejouer'
                for (let i=0 ; i<carte.length;i++){
                    face[i].style.display="none"
                } 
                melanger ()
                vie=health
                tabResponse=[]
    }
}
function melanger (){
    for(let i =0;i<carte.length;i++){
        let melange =parseInt(Math.floor(Math.random()*10))
        carte[i].style.order=melange
    }
}