import { useContext, useEffect, useState } from "react";
import { fetchFunc } from "./fetchFunc";
import { Context } from "./context/CardContext";
import { IPokemon } from "./interface";
import Card from "./Card";

function Deck() {
    const {tamanho, indexAtual, mudarIndex} = useContext(Context);
    const [pokeLista, setPokeLista] = useState<Array<IPokemon>>([]);

    function addPokeLista(novoIten: IPokemon)
    {
        setPokeLista(old => {
            const array = [...old, novoIten].sort((a, b) => a.id > b.id? 1 : -1);
            return array;
        });
    }
    useEffect(
        () => {
            if(tamanho != pokeLista.length) {
                const url = "https://pokeapi.co/api/v2/pokemon/";
                for (let index = pokeLista.length + 1; index <= tamanho; index++) {
                    fetchFunc(url + index, addPokeLista);
                }
            }
        },
        [tamanho]
    );
    return(
        <div>
            <div className="poke-deck">
                {
                    pokeLista.length? pokeLista.map((obj) => {
                        if (obj.id == indexAtual) {
                            return <Card key={obj.id} pokemon={obj} />
                        }
                    }) : <>load</>
                }
                <a className="prev" onClick={() => {mudarIndex(indexAtual - 1)}}>❮</a>
                <a className="next" onClick={() => {mudarIndex(indexAtual + 1)}}>❯</a>
            </div>
        </div>
    );
}

export default Deck;