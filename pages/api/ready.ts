// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import Mux from "@mux/mux-node";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { Video } = new Mux(
    "73dec22a-75a7-4ec1-9a8a-2262ec3e62c5",
    "Xo6ynmST8uUovc0P4FDMWhPwlzr39jNceH582gSKaQp+e/BhPCWVQGXJAM0b9qGYmNUr/ugsGOW",
    {}
  );

  const videoAsset = await Video.Assets.get(
    "NWITEkgXkyuV4CvqBNh02vsFiv71G5o6qIho8lID6xpE"
  );

  console.log("videoAsset", videoAsset);

  res.status(200).json({ name: "John Doe" });
}
