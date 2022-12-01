"use client";
import { useEffect } from "react";
import useSWR from "swr";
import { clientPusher } from "../../pusher";
import { Message as MessageType } from "../../typings";
import fetchMessages from "../../utils/fetchMessages";
import Message from "./Message";
type Props = {
  initialMessages: MessageType[];
};

function MessageList({ initialMessages }: Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<MessageType[]>("/api/getMessages", fetchMessages);

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (data: MessageType) => {
      if (messages?.find((message) => message.id === data.id)) return;
      if (!messages) {
        mutate(fetchMessages);
      } else {
        mutate(fetchMessages, {
          optimisticData: [data, ...messages!],
          rollbackOnError: true,
        });
      }
    });
    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate, clientPusher]);
  return (
    <div className="space-y-5 px-5 pt-8 pb-32 max-w-2xl xl-max-w-4x mx-auto">
      {(messages || initialMessages).map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
