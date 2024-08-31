import React from 'react';

function Header({ onLoginClick }) {
  return (
    <header className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">Tesla Tech</div>
      <nav>
        <button className="mx-2" onClick={() => onLoginClick('home')}>Home</button>
        <button className="mx-2" onClick={() => onLoginClick('home')}>Articles</button>
        <button className="mx-2" onClick={() => onLoginClick('home')}>About</button>
        <button className="mx-2" onClick={() => onLoginClick('home')}>Contact</button>
      </nav>
      {/* <button onClick={onLoginClick} className="bg-blue-500 px-4 py-2 rounded">Login</button> */}
    </header>
  );
}

export default Header;