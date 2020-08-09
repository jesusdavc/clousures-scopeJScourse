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
//Se pueden crear closures de manera involutaria.