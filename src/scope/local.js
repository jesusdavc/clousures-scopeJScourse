const Hello = () => {
    const HelloWorld = 'Hello World';
    console.log(HelloWorld);
}
Hello();
console.log(HelloWorld)//No se puede acceder a la variable

// Segundo Ejemplo.

var scope = 'Hello I am Global';

const HelloPrint = () =>{
    var scope = 'I am Local';
    //La variable se toma como local para la función func
    //Esto se le conoce cómo ámbito léxico. Basicamente las variables dependen del contexto de ejecución
    const func = () =>{
        return scope
    }
    console.log(func());
    console.log(scope)
}
HelloPrint();