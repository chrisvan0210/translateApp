// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Langs } from "~/mongoDB";

type tplotOptions = {
  [key: string]: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.body) {
    try {
      let content: tplotOptions = {};

      let editTarget = await Langs.findOne({ "content.en": req.body.english });
      content["en"] = editTarget.content?.en;
      content["vn"] = editTarget.content?.vn;
      content["cn"] = editTarget.content?.cn;
      content["th"] = editTarget.content?.th;
      content[req.body.lang] = req.body.value;
      let result = await Langs.updateOne(
        { "content.en": req.body.english },
        { $set: { content } }
      );
      res.status(200).json(result);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof Error) {
        res.status(500).json(err.message);
      } else {
        res.status(500).json(err);
      }
    }
  }
}
