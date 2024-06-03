fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.then(characters => { 
    renderCharacters(characters.results)
})

const cardsContainer = document.querySelector('#cards-container'); 

function renderCharacters(characters) {
characters.forEach(character => {

  const div = document.createElement('div');
  const image = document.createElement('img');
  const name = document.createElement('h3');
  const status = document.createElement("h3")
  const gender = document.createElement("h3")
  const numberOfEpisodes = document.createElement("h3")


  div.classList = 'card'
  image.classList = 'card-img'
  status.classList = "status"
  

  image.src = character.image
  name.innerText = character.name
  status.innerText = character.status
  gender.innerText = character.gender
  numberOfEpisodes.innerHTML = character.episode.length


  if(character.status === "Alive") {
    div.style.backgroundColor = "green"
  } else if (character.status === "Dead") {
    div.style.backgroundColor = "red"
  } else  {
    div.style.backgroundColor = "gray"
  }
  

  div.appendChild(image)
  div.appendChild(name)
  div.appendChild(status)
  div.appendChild(gender)
  div.appendChild(numberOfEpisodes)
  cardsContainer.appendChild(div)
});
};
