import { unstable_getServerSession } from "next-auth";
import Image from "next/image";
import LogoutButton from "./components/LogoutButton";

type Props = {
  session: Awaited<ReturnType<typeof unstable_getServerSession>>;
}
function Header({session}: Props) {
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex gap-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src={session.user?.image!}
            alt="profile picture"
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>
        <LogoutButton />
      </header>
    );
  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center gap-5">
        <div className="flex gap-2 items-center">
          <Image
            src="https://links.papareact.com/jne"
            alt="Logo"
            height={50}
            width={50}
          />
          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
