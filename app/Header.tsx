import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./components/LogoutButton";

function Header() {
  const session = true;
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex gap-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src="https://links.papareact.com/jne"
            alt="profile picture"
          />
          <div>
            <p className="text-blue-400">Logged in as:</p>
            <p className="font-bold text-lg">Ahmed Alaa</p>
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
        <Link
          href="/auth/sigin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
}

export default Header;