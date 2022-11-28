'use client'
type Props = {};

function LogoutButton({}: Props) {
  return (
    <div>
      <button 
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4"
      onClick={()=> console.log('hello')}
      >
        Sign Out
      </button>
    </div>
  );
}

export default LogoutButton;
