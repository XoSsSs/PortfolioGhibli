let num=[15,20,29,39,48,12,16,27,33,44,19,29,34,46,47,2,24,26,46,50,13,16,36,44,50,10,21,30,38,42,8,10,11,30,39,8,21,31,39,47,5,7,20,40,50,29,33,35,48,49,8,16,18,31,34,8,16,18,31,34,2,20,28,40,45,10,17,20,35,40,21,26,28,40,41,18,20,22,33,43,21,29,31,34,43,6,20,22,24,45,9,11,13,21,32,2,6,14,19,23,3,23,24,34,35]
let etoile=[7,8,1,7,2,3,2,7,3,5,2,12,4,10,5,2,10,3,8]
let best =[]
let beste =[]
for (x in num){
 
    let score =0
   let verif = num[x]
    for (i in num){
        if (verif==num[i]){
            score++
        }
        
    }
    best.push([verif,score])
    console.log(verif+':'+score)
}
for (x in best){
    if (best[x][1]==4){
        console.log(best[x])
    }
}

for (x in etoile){
 
    let score =0
   let verif = etoile[x]
    for (i in etoile){
        if (verif==etoile[i]){
            score++
        }
        
    }
    beste.push([verif,score])
    console.log(verif+':'+score)
}