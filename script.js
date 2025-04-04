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