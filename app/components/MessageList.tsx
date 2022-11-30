"use client";
import useSWR from "swr";
import { Message as MessageType } from "../../typings";
import fetchMessages from "../../utils/fetchMessages";
import Message from "./Message";
type Props = {};

function MessageList({}: Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<MessageType[]>("/api/getMessages", fetchMessages);
  return (
    <div>
      {messages?.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
}

export default MessageList;
