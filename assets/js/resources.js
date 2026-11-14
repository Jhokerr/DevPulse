import { initialResources } from "./storage.js"
const cards = document.querySelector(".cards")



export function pintarResources(){
    for (let i = 1; i <= localStorage.length; i++){
        let recurso = JSON.parse(localStorage.getItem('resource' + i))
        let resource = `
        <div class="card">
            <div class="info">
                <div class="icon"></div>
                <h2 class="card-titulo">${recurso.title}</h2>
                <label for="" class="descripcion">${recurso.description}</label>
                <div class="tags">
                    ${recurso.tags.map(tag => `<button class="tag">${tag}</button>`).join('')}  
                </div>
            </div>
            <div class="interac">
                <div>
                    <i class="fa-solid fa-globe"></i>
                    <a href="${recurso.url}" target="_blank" rel="noopener noreferrer" class="visiar">Visitar</a>
                </div>
                <div>
                    <i class="fa-regular fa-bookmark"></i>
                    <p class="guardados">${recurso.likes}</p>
                </div>
            </div>       
            </div>
        `
        cards.insertAdjacentHTML("beforeend", resource)
    }
        
    
}

export function pintarUltimo(){
    let recurso = JSON.parse(localStorage.getItem('resource' + localStorage.length))
        let resource = `
        <div class="card">
            <div class="info">
                <div class="icon"></div>
                <h2 class="card-titulo">${recurso.title}</h2>
                <label for="" class="descripcion">${recurso.description}</label>
                <div class="tags">
                    ${recurso.tags.map(tag => `<button class="tag">${tag}</button>`).join('')}  
                </div>
            </div>
            <div class="interac">
                <div>
                    <i class="fa-solid fa-globe"></i>
                    <a href="${recurso.url}" target="_blank" rel="noopener noreferrer" class="visiar">Visitar</a>
                </div>
                <div>
                    <i class="fa-regular fa-bookmark"></i>
                    <p class="guardados">${recurso.likes}</p>
                </div>
            </div>       
            </div>
        `
        cards.insertAdjacentHTML("beforeend", resource)
}


    

