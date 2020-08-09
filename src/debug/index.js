var a = "Hello"
    debugger
function hello(){
    let b = "Hello World";
    const c ="Hello World!";
    if(true){
        let d = "Hello World!!";
    }
    debugger
}
hello();

//
const moneyBox = ()=>{
    var saveCoins = 0;//Scope Local
    debugger;
    const countCoins = (coins) =>{//El closure es el valor que se recuerda cuando se combina función y el ámbito léxico de está variable
        saveCoins += coins;
        debugger;
        console.log(`Money Box: ${saveCoins}`);
    }
    return countCoins
}

let mymoneyBox = moneyBox()
mymoneyBox(6)
debugger
mymoneyBox(6)