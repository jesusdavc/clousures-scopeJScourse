const fruits = () =>{
    if(true){
        var fruits1 = 'apple';
        let fruits2 = 'kiwi';
        const fruits3 = 'banana';
        console.log(fruits2);
        console.log(fruits3)
    }
    console.log(fruits1);
    // console.log(fruits2);//No va poder acceder al código porque esta en un bloque distinto
    // console.log(fruits3);//Ocurre lo mismo
}
fruits();

//Ejemplo2

let x = 1;
{
    let x = 2;
    console.log(x);//Aquí se muestra el valor del bloque sin afectar el Scope Global
}
console.log(x);

//Ejemplo3

const anotherFunction = () =>{
    for( let i=0; i < 10;i++){//Si colocamos var el Scope será local y reasignará el valor a la última iteración
        setTimeout(
            ()=>{
                console.log(i)
            }, 1000
        )
    }
}
anotherFunction()
