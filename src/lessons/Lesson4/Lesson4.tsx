export default function Lesson4() {
  return (
    <div className="ml-8 space-y-4">
      <div className="flex justify-between text-lg">
        <button
          type="button"
          className="bg-sky-400 text-white py-0.5 px-2 rounded transition-all duration-300 hover:bg-sky-600"
        >
          ログアウト
        </button>
        <p>ログイン済み:</p>
      </div>

      <div className="border p-4 flex flex-col gap-4">
        <div>
          <label htmlFor="username" className="block text-lg">
            Username
          </label>
          <input type="text" placeholder="Username" className="border py-0.5 px-2 rounded outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div>
          <label htmlFor="email" className="block text-lg">
            Email
          </label>
          <input type="email" placeholder="Email" className="border py-0.5 px-2 rounded outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <button
          type="button"
          className="text-lg bg-sky-400 text-white py-0.5 px-2 rounded transition-all duration-300 hover:bg-sky-600"
        >
          {' '}
          ログイン
        </button>
      </div>
    </div>
  );
}
