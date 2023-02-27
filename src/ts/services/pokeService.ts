import axios from "axios";

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon-species/';

export interface apiResponse {
  name: string;
}

export async function getData(search: string) {
    if (search.length >= 2) {
    
      const response = await axios
      .get(BASE_URL + search);
      const pokemon = response.data.name;
      console.log(response);
      
      return pokemon;
    }

  }
