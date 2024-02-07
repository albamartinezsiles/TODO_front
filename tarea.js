class Tarea{
    constructor(id,textoTarea,estado,contenedor){ //cada tarea necesita... el contenedor es donde lo vamos a soltar con un appendChild
        this.id = id; //cuando usamos this. significa que estamos obteniendo el valor de la propiedad que le sigue del objeto actual
        this.textoTarea = textoTarea;
        this.DOM = null; //representa la tarea en la interfaz. Es el componente HTML. Es el div que contiene la tarea
        this.editando = false; //si la acabo de crear no la estoy editando, por eso está en false
        this.crearComponente(estado,contenedor); //esto llama a la función crearComponente y le pasa el estado y el contenedor.
    }
    crearComponente(estado,contenedor){ //método(funcion para los amigos) de la clase tarea 
        this.DOM = document.createElement("div"); //en el elemento dom, es decir, la tarea, crea un div
        this.DOM.classList.add("tarea"); //Añádale la clase tarea

        //texto
        let textoTarea = document.createElement("h2"); //Crea un texto h2
        textoTarea.classList.add("visible"); //añádele la clase visible
        textoTarea.innerHTML = this.textoTarea; //Copia el valor de this.textoTarea y colócalo como el contenido interno del elemento HTML textoTarea. Esto podría ser útil, por ejemplo, para actualizar dinámicamente el texto en una página web.Esto no existe en el scope por eso la creamos otra vez

        //input
        let inputTarea = document.createElement("input");
        inputTarea.setAttribute("type","text"); //añádele atributo tipo texto
        inputTarea.value = this.textoTarea; //el value diga lo mismo que textoTarea

        //boton editar
        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton");
        botonEditar.innerText = "editar";

        botonEditar.addEventListener("click",() => this.editarTarea()); //cuando hagas click en boton editar invoca la función editarTarea

        //boton borrar
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("boton");
        botonBorrar.innerText = "borrar";

        botonBorrar.addEventListener("click",() => this.borrarTarea()); //cuando haces click invoca la función borrar tarea y hace referencia a this. La función flecha no crea un contexto de ejecución. Entras a la función flecha, pregunta a función flecha y va a borrarTarea, despues de esto this es para quien sea en borrarTarea, es decir, el objeto

        //boton estado
        let botonEstado = document.createElement("button");
        botonEstado.classList.add("estado", estado ? "terminada" : null); //la variable estado es true o false? si es true ponle la clase terminada, si no no hagas nada
        botonEstado.appendChild(document.createElement("span")); //crea un elemento span y mételo dentro de botonEstado(el boton creado)

        botonEstado.addEventListener("click",() => {
            this.toggleEstado()
            .then(() => botonEstado.classList.toggle("terminada")); //esto se cambia cuando el dato está cambiado en el back (?)
        });

        this.DOM.appendChild(textoTarea); //añádele al div todo esto
        this.DOM.appendChild(inputTarea);
        this.DOM.appendChild(botonEditar);
        this.DOM.appendChild(botonBorrar);
        this.DOM.appendChild(botonEstado);
        contenedor.appendChild(this.DOM); //añade el div al contenedor. Esto hace que el div y todos sus hijos aparezcar en el contenedor
    }
    borrarTarea(){
        this.DOM.remove();
    }
    toggleEstado(){ //aquí va a suceder una llamada al backend.
        return new Promise(callback => { //usa el callback para responder. Cuando tenga backend esta promesa vendrá con un ok o un ko
            callback(); //se cumple/invoca. 
        });
    }
    editarTarea(){
        if(this.editando){ // ¿estoy editando?
            //en caso de que sea true queremos guardar
            let textoTemporal = this.DOM.children[1].value; // lo que ha escrito el usuario

            if(textoTemporal.trim() != "" && textoTemporal.trim() != this.textoTarea){//trim es para que no haya texto vacio aka solo espacio. Aquí se tienen que cumplir AMBAS condiciones
                this.textoTarea = textoTemporal; //esto hace que el texto temporal sea el nuevo textoTarea!!
            } 

            this.DOM.children[0].innerText = this.textoTarea; //ponle al h2 textoTarea
            this.DOM.children[0].classList.add("visible"); //pon visible el h2
            this.DOM.children[1].classList.remove("visible");
            this.DOM.children[2].innerText = "editar";
            this.editando = false;
        }else{
            //en caso de que sea false queremos editar
            this.DOM.children[0].classList.remove("visible"); //quitale al h2 la clase visible
            this.DOM.children[1].value = this.textoTarea; // el valor del input es igual al de textoTarea
            this.DOM.children[1].classList.add("visible"); //ponle la clase visible al input
            this.DOM.children[2].innerText = "guardar"; //boton borrar ahora pone guardar
            this.editando = true;
        }
    }
}