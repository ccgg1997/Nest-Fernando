import axios from 'axios'
import { PokeapiResponse } from '../interfaces/pokeapi-response.interfaces'
import { Move } from '../interfaces/pokeapi-response.interfaces'
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