let Contact = document.getElementById("GoContact")
let Projet = document.getElementById("Projet")
let Biographie= document.getElementById("Biographie")
let Telecharger= document.getElementById("Special")
let Linkedin= document.getElementById("Linkedin")
Contact.addEventListener("click",() => {
    document.getElementById("Cont").scrollIntoView();
});
Projet.addEventListener("click",()=>{
    document.getElementById("LesProjet").scrollIntoView()
;})
Biographie.addEventListener("click",()=>{
    document.getElementById("Bio").scrollIntoView()
})

Telecharger.addEventListener("click",()=>{
    if(confirm("Etes-vous sur de vouloir Telecharger Mon CV")){
        const lien = document.createElement("a");
        lien.href="Dossier/Cv.pdf"
        lien.download="Mon-CV"
        lien.click()
    }else{

    }
    
 

})
Linkedin.addEventListener("click",()=>{
    if (confirm("Vous allez etre rediriger vers une lien")){
        window.open("https://www.linkedin.com/in/raphaelpayet/")

    }else{

    }
})

let Snake= document.getElementById("LienSnake");
let Shoot = document.getElementById("LienShoot")
let Memo = document.getElementById("LienMemo")
let Site= document.getElementById("LienSite")
Snake.addEventListener("click",()=>{
    window.location.href=("Dossier-Projet/SnakeGame/MainSnake.html")
})
Shoot.addEventListener("click",()=>{
    window.location.href=("Dossier-Projet/Jeu-js/MainShootMe.html")
})
Memo.addEventListener("click",()=>{
    window.location.href=("Dossier-Projet/jeu-Memo/main.html")
})
Site.addEventListener("click",()=>{
    window.location.href=("Dossier-Projet/Projet2-main/Projet/main.html")
})

let Mail = document.getElementById("Mail")

Mail.addEventListener("click",()=>{
    window.location.href="mailto:raphpayet67@gmail.com"
    console.log("lol")
})

let Phone = document.getElementById("Phone")

Phone.addEventListener("click",()=>{
    const numero = "262692572974"
    window.location.href="https://wa.me/"+numero
})