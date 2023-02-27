import axios from "axios";

const BASE_URL: string = 'https://pokeapi.co/api/v2/pokemon-species/';

export interface apiResponse {
  name: string;
  color: {
    name: string;
  }
}

export async function getData(search: string):Promise<apiResponse> {   
    let response = await axios
    .get<apiResponse>(BASE_URL + search);
    return response.data;
}
