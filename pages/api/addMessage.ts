import type { NextApiRequest, NextApiResponse } from "next";
import redis from "../../redis";
import { Message } from "../../typings";
type Data = {
  message: Message;
};

type ErrorData = {
  body: string;
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | ErrorData>
) {
  if (req.method !== "POST")
    return res.status(405).json({ body: "Method not allowed" });
  const { message } = req.body;
  // replace the timestamp of the user to the timestamp of the server
  const updatedMessage = {
    ...message,
    created_at: Date.now(),
  };

  await redis.hset("messages", message.id, JSON.stringify(updatedMessage));
  res.status(200).json({ message: updatedMessage });
}
