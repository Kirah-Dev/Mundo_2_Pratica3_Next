import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  new Editora(1, "Alta Books"),
  new Editora(2, "Bookman"),
  new Editora(3, "Addison Wesley"),
  new Editora(4, "Pearson"),
];

class ControleEditora {
  getEditoras(): Editora[] {
    return editoras;
  }

  getNomeEditora(codEditora: number): string {
    const editora = editoras.filter(
      (editora) => editora.codEditora === codEditora
    )[0];
    return editora ? editora.nome : "";
  }
}

export default ControleEditora;
