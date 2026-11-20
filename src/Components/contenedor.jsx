import './styles/contenedor.css'
import Cards from './cards'
export default function Contenedor(){

    return(
        <main className="contenedor-principal">
            <div className="cabecera-contenido">
                <h1 className="titulo-pagina">Resource Grid</h1>
                <div className="filtros">
                    <span>Todos</span>
                    <span>Más Votados</span>
                    <span>Recientes</span>
                </div>
            </div>
            <Cards></Cards>
        </main>
    )
}