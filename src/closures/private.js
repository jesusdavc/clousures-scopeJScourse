const person = () =>{
    var saveName = "Name";
    return{//Creamos metodos para darle un nuevo valor a la variable, unicamente de esta forma y además sólo podrás accederse así.
        getName: ()=>{//Método que retorna el nombre
            return saveName;
        },
        setName: (name)=>{//Método que que crea una nueva asignación
            saveName = name;
        },
    }
}
newPerson = person()
console.log(newPerson.getName());
newPerson.setName("Jesús");
console.log(newPerson.getName())