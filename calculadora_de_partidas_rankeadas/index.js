let winMatches
let loseMatches

function calculateMatches(wins, loses){
    return wins - loses
}

function calculateRank(netWins){
    if(netWins <= 10)
        return "Ferro"
    else if(netWins <= 20)
        return "Bronze"
    else if(netWins <= 50)
        return "Prata"
    else if(netWins <= 80)
        return "Ouro"
    else if(netWins <= 90)
        return "Diamante"
    else if(netWins <= 100)
        return "Lendário"
    else if(netWins > 100)
        return "Imortal"
}

winMatches = 110
loseMatches = 3

victoryBalance = calculateMatches(winMatches, loseMatches)
rank = calculateRank(victoryBalance)

console.log(`O Heroi tem saldo de ${victoryBalance} partidas vencidas, seu rank é ${rank}.`)