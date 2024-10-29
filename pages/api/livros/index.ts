import { NextApiRequest, NextApiResponse } from "next";
import ControleLivro from "../../../classes/controle/ControleLivros";

const controleLivro = new ControleLivro();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const livros = controleLivro.obterLivros();
        res.status(200).json(livros);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    case "POST":
      try {
        const livro = req.body;
        controleLivro.incluir(livro);
        res.status(200).json({ message: "Livro incluido com sucesso" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    default:
      res.status(405).end("Método não permitido");
  }
};

export { controleLivro };
