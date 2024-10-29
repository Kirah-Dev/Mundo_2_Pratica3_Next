import React from "react";
import ControleEditora from "../classes/controle/ControleEditora";
import Livro from "../classes/modelo/Livro";

interface LinhaLivroProps {
  livro: Livro;
  excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <br />
        <button className="btn btn-danger" onClick={() => excluir()}>
          Excluir
        </button>
      </td>
      <td>{nomeEditora}</td>
      <td>
        {livro.autores.map((autor, index) => (
          <li key={index}>{autor}</li>
        ))}
      </td>
    </tr>
  );
};
