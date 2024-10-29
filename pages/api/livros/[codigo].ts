import { NextApiRequest, NextApiResponse } from "next";
import { controleLivro } from "."; // Importa a instância de ControleLivro
import ControleLivros from "@/classes/controle/ControleLivros";

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "DELETE":
      try {
        const codigo = Number(req.query.codigo);
        controleLivro.excluir(codigo);
        res.status(200).json({ message: "Livro excluído com sucesso" });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    default:
      res.status(405).end("Método não permitido");
  }
};

