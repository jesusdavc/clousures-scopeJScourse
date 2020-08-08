const Hello = () => {
    var hello = 'Hola Mundo';
    console.log(hello);
}

Hello();
console.log(hello)//No se va ejecutar ya qué esta NO esta en alcance global


//Segundo ejemplo

const AnotherFunction = () =>{
    var x = 1;
    var x = 2;//Reescribirá el valor
    let y = 1;
    //let y = 2;
    console.log(x);
    console.log(y);
}
//Hay que tener cuidado con var que reescribe la asignaciones
AnotherFunction()