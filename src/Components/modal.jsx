import './styles/modal.css'
import {recuperarResources} from './cards'

import { useState } from 'react';
import { useRef } from 'react';




export default function Modal({isHidden, cambiarIsHidden}){
    const estadoInicial = {
        titulo: "", 
        url: "",
        categoria: "FrontEnd",
        tags: "",
        descripcion: ""
    };
    
    const [formData, setFormData] = useState(estadoInicial)


    function manejarCambios(e){
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };  

    let claseHidden = isHidden ? "hidden" : "" 

    function quitarModal(){ 
        setFormData(estadoInicial);
        cambiarIsHidden()
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(formData.descripcion.length > 500){
            alert("La descripcion no puede tener mas de 500 caracteres")
            return 
        }

        let nuevo = (
            {
                id: `resource${localStorage.length + 1}`,
                title: formData.titulo,
                url: formData.url,
                description: formData.descripcion,
                category: formData.categoria,
                tags: formData.tags.split(","),
                likes: 14,
                author: "jhon_dev"
            }
        )
    
        localStorage.setItem(`resource${localStorage.length + 1}`, JSON.stringify(nuevo))
        recuperarResources()
        quitarModal()
    };


    

  

    return(
        <div className = {`${claseHidden} modal`} >
            <div className="container">
                <div className="titulo">
                    <h3>Añadir Nuevo Recurso</h3>
                    <i className="fa-solid fa-x quitar-modal" onClick={quitarModal}></i>
                </div>
                <form action="" className="htmlFormulario">
                    <div className="inputs">
                            <label htmlFor="">Titulo (ej. Tailwind CSS)</label>
                            <input 
                                type="text" 
                                name= "titulo"
                                value= {formData.titulo}
                                className="input-titulo"  
                                placeholder="Tailwind CSS"
                                onChange={manejarCambios}     
                            />
                            <label htmlFor="">URL (ej. tailwindcss.com)</label>
                            <input 
                                type="text"
                                name='url'
                                value= {formData.url} 
                                className="input-url" 
                                placeholder="tailwindcss.com"
                                onChange={manejarCambios}  
                            />
                            <label htmlFor="">Categoría</label>
                            <select name="categoria" defaultValue={formData.categoria} id="" className="input-categoria">
                                <option value="frontend">FrontEnd</option>
                                <option value="backend">BackEnd</option>
                                <option value="herramientas">Herramientas</option>
                                <option value="devops">DevOps</option>
                            </select>
                            <label htmlFor="">etiquetas (separadas por comas)</label>
                            <input 
                                type="text"
                                name='tags'
                                value= {formData.tags} 
                                className="input-etiquetas" 
                                placeholder="CSS, UI, Styles" 
                                onChange={manejarCambios} 
                            />
                            <label htmlFor="">Descripción</label>
                            <textarea
                                name="descripcion"
                                defaulvalue={formData.descripcion} 
                                className="input-descripcion" 
                                id="" 
                                placeholder="Framework de clases utilitarias para diseñar interfaces modernas..."
                                onChange={manejarCambios}
                            >
                                
                            </textarea> 
                            <label className="contador" htmlFor="">{formData.descripcion.length}/500</label>
                    </div>
                    <div className="botones">
                        <button className="boton-cancelar" type="reset" onClick={quitarModal}>Cancelar</button>
                        <button className="boton-publicar" type="submit" onClick={handleSubmit}>Publicar Recurso</button>
                    </div>
                </form>
            </div>
        </div>
    )
}