import { pintarResources, pintarUltimo } from "./resources.js";
import { initialResources, cargarDatos } from "./storage.js"
const botonAbrirModal = document.querySelector('.crear-recursos')
const cards = document.querySelector(".cards")


/*Formulario del Modal*/
const formulario = document.querySelector(".formulario")
const modal = document.querySelector(".modal")
const botonQuitarModal = document.querySelector(".quitar-modal")
const botonCancelar = document.querySelector(".boton-cancelar")
const inputTitulo = document.querySelector(".input-titulo")
const inputUrl = document.querySelector(".input-url")
const inputCategoria = document.querySelector(".input-categoria")
const inputEtiquetas = document.querySelector(".input-etiquetas")
const inputDescripcion = document.querySelector(".input-descripcion")
const contador = document.querySelector(".contador")
const botonPublicar = document.querySelector(".boton-publicar")



botonAbrirModal.addEventListener('click', abrirModal)
botonQuitarModal.addEventListener('click', quitarModal)
botonCancelar.addEventListener('click', quitarModal)
formulario.addEventListener('submit', publicar )
inputDescripcion.addEventListener('input', subirContador)

function subirContador(){
    let value = 0 
    contador.innerHTML = `${inputDescripcion.value.length}/500`
}


pintarResources()


function abrirModal(){
    modal.classList.remove("hidden")

} 

function quitarModal(){
    modal.classList.add("hidden")
} 

function limpiarForm(){
    inputTitulo.value = ""
    inputUrl.value = ""
    inputCategoria.value = "frontend"
    inputEtiquetas.value = ""
    inputDescripcion.value = ""
}


function publicar(event){
    event.preventDefault()
    if(inputDescripcion.value.length > 500){
        alert("La descripcion no puede tener mas de 500 caracteres")
    }

    let nuevo = (
        {
            id: `resource${localStorage.length + 1}`,
            title: inputTitulo.value,
            url: inputUrl.value,
            description: inputDescripcion.value,
            category: inputCategoria.value,
            tags: inputEtiquetas.value.split(","),
            likes: 14,
            author: "jhon_dev"
        }
    )

    localStorage.setItem(`resource${localStorage.length + 1}`, JSON.stringify(nuevo))
    pintarUltimo()



    limpiarForm()
    quitarModal()
}



