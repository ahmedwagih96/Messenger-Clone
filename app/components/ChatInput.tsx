"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { v4 as uuid } from "uuid";
import { Message as MessageType } from "../../typings";
import fetchMessages from "../../utils/fetchMessages";
type Props = {};

function ChatInput({}: Props) {
  const [input, setInput] = useState<string>("");

  const {
    data: messages,
    error,
    mutate,
  } = useSWR("/api/getMessages", fetchMessages);

  const addMessage = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!input) return;

    const messageToSend = input;

    setInput("");

    const id = uuid();

    const message: MessageType = {
      id,
      messageToSend,
      created_at: Date.now(),
      username: "Ahmed Alaa",
      profilePic:
        "https://media-exp1.licdn.com/dms/image/C4E03AQELKf4u0Q8HZw/profile-displayphoto-shrink_200_200/0/1651101391967?e=1675296000&v=beta&t=fuEPXlOSpKIzZi072NzOWKI0hPV-rw52DrbRx8uck58",
      email: "ahmd.wagih96@gmail.com",
    };

    const uploadMessage = async () => {
      const data = await fetch("/api/addMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then((res) => res.json());

      return [data.message, ...messages!];
    };

    await mutate(uploadMessage, {
      optimisticData: [message, ...messages!],
      rollbackOnError: true,
    });
  };
  return (
    <form
      onSubmit={addMessage}
      className="flex gap-2 px-10 py-2 border-t border-gray-100 fixed bottom-0 z-50 w-full"
    >
      <input
        type="text"
        className="flex-1 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent px-5 py-3 disabled:opacity-50 disabled:cursor-not-allowed"
        placeholder="Enter message here.."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!input}
      >
        Send
      </button>
    </form>
  );
}

export default ChatInput;
