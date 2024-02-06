class Tarea{
    constructor(id,textoTarea,estado,contenedor){ //cada tarea necesita... el contenedor es donde lo vamos a soltar con un appendChild
        this.id = id;
        this.textoTarea = textoTarea;
        this.DOM = null; //representa la tarea en la interfaz. Es el componente HTML
        this.crearComponente(estado,contenedor);
    }
    crearComponente(estado,contenedor){
        this.DOM = document.createElement("div");
        this.DOM.classList.add("tarea"); //también se puede usar className("tarea");

        //texto
        let textoTarea = document.createElement("h2");
        textoTarea.classList.add("visible");
        textoTarea.innerHTML = this.textoTarea; //no existe en el scope por eso la creamos otra vez

        //input
        let inputTarea = document.createElement("input");
        inputTarea.setAttribute("type","text");
        inputTarea.value = this.textoTarea; //el value diga lo mismo que textoTarea

        //boton editar
        let botonEditar = document.createElement("button");
        botonEditar.classList.add("boton");
        botonEditar.innerText = "editar";

        //boton borrar
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("boton");
        botonEditar.innerText = "borrar";

        //boton estado
        let botonEstado = document.createElement("button");
        botonEstado.classList.add("estado", estado ? "termianda" : null); //la variable estado es true o false? si es true ponle estado, si no no hagas nada
        botonEstado.appendChild(document.createElement("span"));

        this.DOM.appendChild(textoTarea);
        this.DOM.appendChild(inputTarea);
        this.DOM.appendChild(botonEditar);
        this.DOM.appendChild(botonBorrar);
        this.DOM.appendChild(botonEstado);
        contenedor.appendChild(this.DOM);
    }
}