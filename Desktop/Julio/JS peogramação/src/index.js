let nomeDoHeroi = "Julio";
let xpDoHeroi = 3567;
let nivel;

if(xpDoHeroi < 1000){
   nivel = "Ferro"
}else if(xpDoHeroi >=1001 && xpDoHeroi <=2000){
   nivel = "Bronze"
}else if(xpDoHeroi >=2001 && xpDoHeroi <=3000){
    nivel = "Prata"
}else if(xpDoHeroi >=3001 && xpDoHeroi <=4000){
    nivel = "Ouro"
}else if(xpDoHeroi >=4001 && xpDoHeroi <=5000){
    nivel = "Platina"
}else if(xpDoHeroi >=5001 && xpDoHeroi <=6000){
    nivel = "Ascedente"
}else if(xpDoHeroi >=6001 && xpDoHeroi <=7000){
    nivel = "Imortal"
}else if(xpDoHeroi >=7001 && xpDoHeroi <=8000){
    nivel = "Radiante"
}


console.log("O Héroi de nome " + nomeDoHeroi + " está no nível " + nivel);
