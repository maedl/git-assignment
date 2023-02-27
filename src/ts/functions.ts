import { getData } from "./services/pokeService";

export function init() {
   let btn = document.querySelector('button') as HTMLButtonElement;
   btn.addEventListener('click', searchPokemon);
}

async function searchPokemon() {
  const inputField = (document.querySelector('input') as HTMLInputElement);
  const searchText: string = inputField.value;
  console.log(getData(searchText));
  // printResponse();
}

/*
function printResponse() {
 
}

*/