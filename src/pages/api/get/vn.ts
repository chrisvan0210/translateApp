// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Vietnamese } from "~/mongoDB";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body) {
    console.log(req.body.keyword);
    try {
      let result = await Vietnamese.findOne({"content.keyword" : req.body.keyword});
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
