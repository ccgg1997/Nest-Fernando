import { Move, PokeapiResponse } from '../interfaces/pokeapi-response.interfaces';
import { PokeapiAdapter,PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import { HttpAdapter } from '../api/pokeApi.adapter';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com/${ this.id }.jpg`;
    }
  
    constructor(
        public readonly id: number, 
        public name: string,
        // Todo: inyectar dependencias
        private readonly http: HttpAdapter

    ) {}

    scream() {
       return(`${ this.name.toUpperCase() }!!!`);
    }

    speak() {
        return(`${ this.name }, ${ this.name }`);
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeapiResponse>('https://pokeapi.co/api/v2/pokemon/4');
        return data.moves;
    }

}

const pokeApi = new PokeapiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();
export const charmander = new Pokemon( 4, 'Charmander',pokeApiFetch );


charmander.getMoves();