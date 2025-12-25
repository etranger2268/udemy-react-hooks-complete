let age = 0;

export default function Lesson1_1() {
  const handleClick = () => {
    age += 1;
    console.log(age);
  };
  return (
    <div>
      <input type="text" />
      <button type="button" onClick={handleClick} className="border p-2 rounded-md bg-red-100">
        Add age
      </button>
      <p>You are {age}</p>
    </div>
  );
}
