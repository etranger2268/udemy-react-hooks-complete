import { useState } from 'react';
import { deliverMessage } from './actions';
import Thread from './Thread';

export type Message = {
  text: string;
  sending: boolean;
  key: number;
};

export default function Lesson6() {
  const initialMessage: Message = {
    text: 'Hello World',
    sending: false,
    key: 1,
  };
  const [messages, setMessages] = useState<Message[]>([initialMessage]);

  const sendMessage = async (formData: FormData) => {
    const messageEntry = formData.get('message');
    if (!messageEntry || typeof messageEntry !== 'string') {
      return;
    }

    const resultMessage = await deliverMessage(messageEntry);
    setMessages((prev) => [...prev, { text: resultMessage, sending: false, key: prev.length + 1 }]);
  };

  return (
    <div className="ml-8 text-lg">
      <Thread messages={messages} sendMessage={sendMessage} />
    </div>
  );
}
