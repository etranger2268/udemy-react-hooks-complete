import { useState } from 'react';

type From = {
  fn: string;
  ln: string;
  email: string;
};

export default function Lesson1_2() {
  const initialForm: From = {
    fn: 'Sam',
    ln: 'Smith',
    email: 'samsmith@gmail.com',
  };

  const [form, setForm] = useState(initialForm);

  const handleChange = (key: string, value: string) =>
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));

  return (
    <div>
      <div className="flex mb-5 gap-4">
        <div>
          <label htmlFor="fn" className="block">
            First Name:
          </label>
          <input
            type="text"
            id="fn"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            className="border mr-2 p-0.5 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="ln" className="block">
            Last Name:
          </label>
          <input
            type="text"
            id="ln"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            className="border mr-2 p-0.5 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
        <div>
          <label htmlFor="email" className="block">
            Email:
          </label>
          <input
            id="email"
            type="text"
            onChange={(e) => handleChange(e.target.id, e.target.value)}
            className="border mr-2 p-0.5 rounded focus:outline-none focus:ring focus:ring-blue-500"
          />
        </div>
      </div>
      <ul>
        <li>{form.fn}</li>
        <li>{form.ln}</li>
        <li>{form.email}</li>
      </ul>
    </div>
  );
}
