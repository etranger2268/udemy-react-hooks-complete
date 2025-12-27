import { useState } from 'react';
import { useAuth } from './context/Auth';

export default function Lesson4() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const { user, login, logout } = useAuth();

  const handleClick = () => {
    login({ username, email });
  };

  return (
    <div className="ml-8 space-y-4">
      {user ? (
        <div className="text-lg">
          <p className="text-red-500">ログイン済み: {user?.username}</p>
          <button
            type="button"
            onClick={logout}
            className="bg-sky-400 text-white py-0.5 px-2 rounded transition-all duration-300 hover:bg-sky-600"
          >
            ログアウト
          </button>
        </div>
      ) : (
        <div className="border p-4 flex flex-col gap-4">
          <div>
            <label htmlFor="username" className="block text-lg">
              Username
            </label>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="border py-0.5 px-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg">
              Email
            </label>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border py-0.5 px-2 rounded outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={handleClick}
            className="text-lg bg-sky-400 text-white py-0.5 px-2 rounded transition-all duration-300 hover:bg-sky-600"
          >
            {' '}
            ログイン
          </button>
        </div>
      )}
    </div>
  );
}
