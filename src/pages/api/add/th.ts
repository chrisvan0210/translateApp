// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Thai } from "~/mongoDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body) {
    try {
      let result = await Thai.create(req.body);
      res.status(200).json(result);
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json(err.message);
      } else {
        res.status(500).json(err);
      }
    }
  }
}
