import { NextApiRequest, NextApiResponse } from "next";
import ControleEditora from "../../../classes/controle/ControleEditora";


const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const editoras = controleEditora.getEditoras();
        res.status(200).json(editoras);
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    default:
      res.status(405).end("Método não permitido");
  }
};

export { controleEditora };