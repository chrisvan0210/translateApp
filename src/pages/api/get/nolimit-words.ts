// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { NextApiRequest, NextApiResponse } from "next/types";
import { Langs } from "~/mongoDB";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        let result = await Langs.find().sort({ createdAt : -1 });
        res.status(200).json(result);
    } catch (err: unknown) {
        if (err instanceof Error) {
            res.status(500).json(err.message);
        } else {
            res.status(500).json(err);
        }
    }
}
