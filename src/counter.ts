import axios from "axios"
import { pokemonIds } from "./bases/02-structure"
import { PokeapiResponse } from "./interfaces/pokeapi-response.interfaces"
import { Move } from "./interfaces/pokeapi-response.interfaces"

export function setupCounter(element: HTMLButtonElement) {
  let counter = 0
  const setCounter = (count: number) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
  
}

//clase de pokemon con id y nombre 

export class Pokemon {
  constructor(public id: number, public name: string) {}
  
  
  async getmoves(): Promise<Move[]>{
    const {data} = await axios.get<PokeapiResponse>(`https://pokeapi.co/api/v2/pokemon/4`)
    console.log(data.moves[0].move)

    return data.moves

  }

}

export const charmander = new Pokemon(4,'charmander')

charmander.getmoves()