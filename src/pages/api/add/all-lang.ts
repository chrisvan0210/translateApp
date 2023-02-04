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
      let content = {} as tplotOptions;
      content["en"] = req.body.english;
      content[req.body.lang] = req.body.value;

      let isWordExist = await Langs.findOne({ "content.en": req.body.english });
      if (isWordExist) {
        let result = await Langs.updateOne(
          { "content.en": req.body.english },
          { content }
        );
        res.status(200).json(result);
      } else {
        let result = await Langs.create({ content });
        res.status(200).json(result);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        res.status(500).json(err.message);
      } else {
        res.status(500).json(err);
      }
    }
  }
}
