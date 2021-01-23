import React, { useState } from 'react';

import { NomeCompleto } from './components/NomeCompleto';
import { INomeCompleto } from './interfaces/NomeCompleto';

export const App = () => {
  const [nome, setNome] = useState("Lucas");

  const handleChange = (nomeCompleto: INomeCompleto) => {
    console.log(nomeCompleto)
    setNome(nomeCompleto.nome);
  }

  return (
    <div>
      <div>Pai: {nome}</div>
      <hr></hr>

      <NomeCompleto
        onChange={handleChange}
        nomeCompleto={{ nome: nome, sobrenome: "Lucas" }}
      />
    </div>
  );
}
