import { IPokemon } from "./interface";

function Card(props: {pokemon: IPokemon}) {
    const { pokemon } = props;
    return(
        <div className={`poke-card ${pokemon.types[0].type.name}`}>
            <div className="poke-id">{pokemon.id}</div>
            <img className="poke-image" src={pokemon.sprites.other.home.front_default} />
            <div className="poke-name">{`${pokemon.name[0].toUpperCase()}${pokemon.name.substring(1)}`}</div>
            <div className="grup-type">
                {pokemon.types.map(obj => <div key={`${pokemon.name} ${obj.slot}`} className={`type ${obj.type.name}`}>
                    {
                        `${obj.type.name[0].toUpperCase()}${obj.type.name.substring(1)}`
                    }
                </div>)}
            </div>
        </div>
    );
}

export default Card;