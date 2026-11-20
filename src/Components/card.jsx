import './styles/card.css'

export function Tag({nombre}){
    return(
        <button key={nombre} className="tag">{nombre}</button>
    )
}


export default function Card({titulo, descripcion, tags, url, likes}){
    // console.log(titulo)
    return(
        <div className="card">
            <div className="info">
                <div className="icon"></div>
                <h2 className="card-titulo">{titulo}</h2>
                <label className="descripcion">{descripcion}</label>
                <div className="tags">
                    {tags.map(tag => (
                        <Tag 
                            key={tag}
                            nombre = {tag} 
                        />
                    ))}  
                </div>
            </div>
            <div className="interac">
                <div>
                    <i className="fa-solid fa-globe"></i>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="visiar">Visitar</a>
                </div>
                <div>
                    <i className="fa-regular fa-bookmark"></i>
                    <p className="guardados">{likes}</p>
                </div>
            </div>       
        </div>
    )
}