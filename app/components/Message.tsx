import Image from "next/image";
import { Message } from "../../typings";
type Props = {
  message: Message;
};

function Message({ message }: Props) {
  return (
    <div className="flex w-fit">
      <div className="flex-shrink-0">
        <Image
          src={message.profilePic}
          height={10}
          width={50}
          className="rounded-full mx-2"
          alt="Profile"
        />
      </div>
      <div className="text-[0.65rem] px-[2px] pb-[2px] text-red-400">
        <p>{message.username}</p>
      </div>
      <div className="flex items-end">
        <p className="px-3 py-2 rounded-lg w-fit text-white bg-red-400">{message.messageToSend}</p>
      </div>
      <p className="text-[0.65rem] italic px-2 text-gray-300">{new Date(message.created_at).toLocaleString()}</p>
    </div>
  );
}

export default Message;
