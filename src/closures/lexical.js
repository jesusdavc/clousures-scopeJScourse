const buildCount = (i) =>{//Generalmente y dependiendo que se quiere obtener se pasa o no un parametro en la funcioón más externa.
    let count = i;
    const disPlayCount = () =>{
        console.log(count++)
    }//El ámbito léxico son las funciones que utilizan el alcance donde está asignada
    return disPlayCount
}

let myNewCount = buildCount(1);
myNewCount();
myNewCount();
myNewCount();
