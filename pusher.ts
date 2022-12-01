import Pusher from "pusher";
import ClientPusher from "pusher-js";

export const serverPusher = new Pusher({
  appId: "1516041",
  key: "cb4ac1576772ae7a3a4e",
  secret: "04ddbe39c0d89c3ff820",
  cluster: "eu",
  useTLS: true,
});

export const clientPusher = new ClientPusher("cb4ac1576772ae7a3a4e", {
  cluster: "eu",
});
