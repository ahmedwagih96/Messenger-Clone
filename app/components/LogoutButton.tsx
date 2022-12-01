"use client";

import { signOut } from "next-auth/react";
type Props = {
  
}
function LogoutButton({}: Props) {
  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
        onClick={() => signOut()}
      >
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
