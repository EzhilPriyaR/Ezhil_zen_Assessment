let div = document.createElement("div");
document.body.append(div);

let heading = document.createElement("h1");
heading.innerText = "RICK & MORTHY"  
heading.setAttribute("id", "title");
div.append(heading);

let mainContainer = document.createElement("div");
mainContainer.setAttribute("class", "container");
div.append(mainContainer)

fetch("https://rickandmortyapi.com/api/character")
           .then((response => response.json()))
           .then((character => character.results))
           .then((data => {data.forEach(element => {
                    console.log(element);
                    let character = {
        
                        ...element,
               
                        image : element.image,
                        id : element.id,
                        name : element.name,
                        status : element.status,
                        species : element.species,
                        gender : element.gender,
                     }
                     displayCharacters(character);
                })
           })).catch((error) => console.log(error));

function displayCharacters(character){
    mainContainer.innerHTML += `
               <div class="card" style="width: 18rem;">
                    <img class="card-img-top" src=${character.image} alt=${character.name}>
                    <div class="card-body">
                         <h4 class="card-title">${character.id} ${character.name}</h4>
                         <p class="card-text"><b>Status:</b> ${character.status}</p>
                         <p class="card-text"><b>Species</b> ${character.species}</p>
                         <p class="card-text"><b>Gender</b> ${character.gender}</p>
                    </div>
               </div>`;

}