import { NextApiRequest, NextApiResponse } from "next";
import { controleEditora } from "./index";

export default (req: NextApiRequest, res: NextApiResponse) => {
  switch (req.method) {
    case "GET":
      try {
        const codEditora = Number(req.query.codEditora);
        const nomeEditora = controleEditora.getNomeEditora(codEditora);
        res.status(200).json({ nomeEditora });
      } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Erro no servidor" });
      }
      break;
    default:
      res.status(405).end("Método não permitido");
  }
};
