import { getData } from "./services/pokeService";

export function init() {
   let btn = document.querySelector('button') as HTMLButtonElement;
   btn.addEventListener('click', handleClick);
}

function handleClick() {
  const inputField = (document.querySelector('input') as HTMLInputElement);
  const searchText: string = inputField.value;

  if (searchText.length >= 2) {
    searchPokemon(searchText);
  }

}

async function searchPokemon(search: string) {
  let response = await getData(search);
  let pokemonName: string = response.name;
  let pokemonColor: string = response.color.name;
  printResponse(pokemonName, pokemonColor);
}

function printResponse(name: string, color: string) {
  const infoContainer = document.querySelector('.poke-info') as HTMLDivElement;
  infoContainer.innerHTML = `The pokemon ${name} is the color ${color}`;
}
