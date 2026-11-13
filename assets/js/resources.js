const cards = document.querySelector(".cards")

let recursos = JSON.parse(localStorage.getItem('resources'))

export function crearResource(){
    recursos.forEach(recurso => {
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
    });
        
    
}

console.log(recursos)


    

