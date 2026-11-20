import './styles/header.css'
import Modal from './modal'
import { useState } from 'react';

export default function Header({isHidden, cambiarIsHidden}){
    return(
        <header className="navbar">
            <div className="logo">
                <img src="/assets/images/logo.png" alt="logo" />
            </div>
            <div className="buscador">
                <i className="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder="Buscar Recursos" />
            </div>
            <div className="recursos">
                <button 
                    className="crear-recursos" 
                    onClick={() => cambiarIsHidden()}
                >
                    <i className="fa-solid fa-plus"></i> Crear Recurso
                </button>
                <img className="perfil" src="/assets/images/avatar.webp" alt="imgPerfil" />
            </div> 
        </header>
    )
}