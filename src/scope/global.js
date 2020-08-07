var hello = "Hello";//Alcance Global
let world = 'Hello World';
const helloWorld = 'Hello World!';

const anotherFunction = () =>{
    console.log(hello);
    console.log(world);
    console.log(helloWorld);

}

anotherFunction();

//Malas prácticas en relación al Scope Globlal 

//I Asignación no específica
const imprimirVariables = () => {
    globlalVar = 'Im Global';
}
imprimirVariables();
console.log(globlalVar);

//II Doble asignación

const imprimirVariables2 = () => {
    var Global = AnotherGlobal = 'Im Global';
}
imprimirVariables2();
console.log(AnotherGlobal)
