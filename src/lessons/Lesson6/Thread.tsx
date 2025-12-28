export default function Thread({ messages, sendMessage }) {
  const handleSubmit = async () => {};
  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        name="message"
        placeholder="Hello!"
        className="border py-0.5 px-2 rounded outline-none focus:ring focus:ring-blue-600"
      />
      <button
        type="submit"
        className="bg-sky-400 py-0.5 px-2 text-white rounded transition-all duration-300 hover:bg-sky-600"
      >
        送信
      </button>
    </form>
  );
}
