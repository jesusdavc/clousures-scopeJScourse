//Valor recuerdo

const moneyBox = (coins)=>{
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Money Box: ${saveCoins}`);
}

moneyBox(5)
moneyBox(10)

const moneyBox = ()=>{
    var saveCoins = 0;//Scope Local
    const countCoins = (coins) =>{//El closure es el valor que se recuerda cuando se combina función y el ámbito léxico de está variable
        saveCoins += coins;
        console.log(`Money Box: ${saveCoins}`);
    }
    return countCoins
}

let mymoneyBox = moneyBox()
mymoneyBox(6)
mymoneyBox(6)
