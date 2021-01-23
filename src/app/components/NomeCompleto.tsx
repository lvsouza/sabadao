import React from 'react';

import { INomeCompleto } from './../interfaces/NomeCompleto';

interface NomeCompletoProps {
    nomeCompleto: INomeCompleto;
    onChange: (nomeCompleto: INomeCompleto) => void
}
export const NomeCompleto: React.FC<NomeCompletoProps> = ({ onChange, nomeCompleto }) => {
    return (<>
        <div>Filho</div>
        <div>{nomeCompleto.nome}</div>

        <input
            value={nomeCompleto.nome}
            onChange={e => onChange({ nome: e.target.value, sobrenome: nomeCompleto.sobrenome })}
        />
    </>);
}
