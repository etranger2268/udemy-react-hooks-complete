import { useRef } from 'react';
import type { Message } from './Lesson6';

type Props = {
  messages: Message[];
  sendMessage: (formData: FormData) => Promise<void>;
};

export default function Thread({ messages, sendMessage }: Props) {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    await sendMessage(formData);
    formRef.current?.reset();
  };

  return (
    <div>
      <ul className="flex items-center">
        {messages.map((message) => (
          <li key={message.key}>{`${message.text},`}</li>
        ))}
      </ul>
      <form ref={formRef} onSubmit={handleSubmit} className="flex items-center gap-2">
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
    </div>
  );
}
