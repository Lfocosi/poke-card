import { createContext, useState } from "react";

export const Context = createContext<any>(null);

export function CardsContext({children}: {children: JSX.Element})
{
    const [indexAtual, setIndexAtual] = useState(1);
    const [indexLimit, setIndexLimit] = useState(151);
    const [tamanho, setTamanho] = useState(151);

    function mudarTamanho(novoTamanho: number) {
        setTamanho(old => {
            if((old + novoTamanho) >= indexLimit) {
                return indexLimit;
            }
            return old + novoTamanho;
        });
    }

    function mudarIndex(novoIndex: number) {
        if(novoIndex >= tamanho - 20) {
            mudarTamanho(50)
        }
        if(novoIndex <= 0) setIndexAtual(1);
        else if(novoIndex >= tamanho) setIndexAtual(tamanho);
        else setIndexAtual(novoIndex)
    }

    const value = {
        indexAtual, mudarIndex,
        indexLimit, setIndexLimit,
        tamanho, setTamanho,
    };
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    );
}