a = 2;
var a;//solo funciona con var
console.log(a)
//El codigo se comporta como:
var a;
a = 2;
console.log(a)
//Hoisting en Funciones

nameOfDog('Negro');

function nameOfDog(name){
    console.log(name)
}

//Funciona similar a con var.

function nameOfDog(name){
    console.log(name)
}
nameOfDog('Negro');