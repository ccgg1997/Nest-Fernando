class NewPokemon{
    constructor(
        public readonly id:number,
        public name:string,
    ){}

    scream(){
        return(`NO QUIERO!!!`);
    }

    talk(){
        return(`NO QUIERO HABLAR`);
        
    }
}


const MyDecorator = () =>{
    return (target:Function) => {
        // console.log(target);
        return NewPokemon;
    }
}

@MyDecorator()
export class Pokemon{
    constructor(
        public readonly id:number,
        public name:string,
    ){}

    scream(){
        return(`${this.name.toUpperCase()}!!!`);
    }

    talk(){
        return(`${this.name}, ${this.name}`);
        
    }
}

export const charmander = new Pokemon(4,'Charmander');