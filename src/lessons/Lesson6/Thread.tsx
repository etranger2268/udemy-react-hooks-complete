import { useOptimistic, useRef } from 'react';
import type { Message } from './Lesson6';

type Props = {
  messages: Message[];
  sendMessage: (message: string) => Promise<void>;
};

export default function Thread({ messages, sendMessage }: Props) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [optimisticMessages, addOptimisticMessage] = useOptimistic(
    messages,
    (state: Message[], newMessageText: string) => [
      ...state,
      {
        text: newMessageText,
        sending: true,
        key: state.length + 1,
      },
    ],
  );

  const formAction = async (formData: FormData) => {
    const message = formData.get('message');
    if (!message || typeof message !== 'string') return;
    addOptimisticMessage(message);
    formRef.current?.reset();
    await sendMessage(message);
  };

  return (
    <div>
      <ul>
        {optimisticMessages.map((message) => (
          <li key={message.key}>
            {message.text} {message.sending && <span className="text-green-600">Sending...</span>}
          </li>
        ))}
      </ul>
      <form ref={formRef} action={formAction} className="flex items-center gap-2">
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
