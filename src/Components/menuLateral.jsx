import './styles/menuLateral.css'
export default function MenuLateral(){

    return(
       <nav className="menu-lateral">
            <a href="#"><button><i className="fa-solid fa-list"></i> Todas</button></a>
            <a href="#"><button><i className="fa-solid fa-palette"></i> FrontEnd</button></a>
            <a href="#"><button><i className="fa-solid fa-gear"></i> BackEnd</button></a>
            <a href="#"><button><i className="fa-solid fa-screwdriver-wrench"></i> Herramientas</button></a>
            <a href="#"><button><i className="fa-solid fa-cloud"></i> DevOps</button></a>
            <div className="estadisticas">
                <p>ESTADISTICAS RAPIDAS</p>
                <label htmlFor="">total Recursos:</label> <p>12</p>
                <label htmlFor="">total Recursos:</label> <p>12</p>
            </div>
        </nav>
    )
}