let heroName
let heroXP
let heroRank

heroName = "Hulk"
heroXP = 10651

/*
console.log("Bem-vindo ao classifacor de Rank!\nVou precisar de alguma informações...")
heroName = prompt("Qual o nome do seu herói?")
heroXP = prompt("Qual o XP dele(a)?")
*/

if (heroXP <= 1000){
    heroRank = "Ferro"
}else if (heroXP > 1000 && heroXP <= 2000){
    heroRank = "Bronze"
}else if (heroXP > 2000 && heroXP <= 5000){
    heroRank = "Prata"
}else if (heroXP >5000 && heroXP <= 7000){
    heroRank = "Ouro"
}else if (heroXP > 7000 && heroXP <= 8000){
    heroRank = "Platina"
}else if (heroXP > 8000 && heroXP <= 9000){
    heroRank = "Ascendente"
}else if (heroXP > 9000 && heroXP <= 10000){
    heroRank = "Imortal"
}else if (heroXP > 10000){
    heroRank = "Radiante"
}

console.log("Calculando...\n")
console.log("O rank do(a) " + heroName + " é: " + heroRank)