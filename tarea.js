class Tarea{
    constructor(id,textoTarea,estado,contenedor){ //cada tarea necesita... el contenedor es donde lo vamos a soltar con un appendChild
        this.id = id; //cuando usamos this. significa que estamos obteniendo el valor de la propiedad que le sigue del objeto actual
        this.textoTarea = textoTarea;
        this.DOM = null; //representa la tarea en la interfaz. Es el componente HTML. Es el div que contiene la tarea
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

        //boton borrar
        let botonBorrar = document.createElement("button");
        botonBorrar.classList.add("boton");
        botonEditar.innerText = "borrar";

        //boton estado
        let botonEstado = document.createElement("button");
        botonEstado.classList.add("estado", estado ? "termianda" : null); //la variable estado es true o false? si es true ponle la clase terminada, si no no hagas nada
        botonEstado.appendChild(document.createElement("span")); //crea un elemento span y mételo dentro de botonEstado(el boton creado)

        this.DOM.appendChild(textoTarea); //añádele al div todo esto
        this.DOM.appendChild(inputTarea);
        this.DOM.appendChild(botonEditar);
        this.DOM.appendChild(botonBorrar);
        this.DOM.appendChild(botonEstado);
        contenedor.appendChild(this.DOM); //añade el div al contenedor. Esto hace que el div y todos sus hijos aparezcar en el contenedor
    }
}