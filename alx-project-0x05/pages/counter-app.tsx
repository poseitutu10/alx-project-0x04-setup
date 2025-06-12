import { useCount } from "@/context/CountContext";
import { useState } from "react";

const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((content) => content + 1);
  };

  const decrement = () => {
    setCount((content) => (content > 0 ? content - 1 : 0));
  };

  const contextData = useCount()

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      {/* Title */}
      <h1 className="text-6xl font-extrabold mb-6">🤖 Fun Counter App 🎉</h1>

      {/* Funny message */}
      <p className="text-lg font-medium mb-4">
        Current count: {count}{" "}
        {count === 0
          ? "🙈 No clicks yet!"
          : count % 10 === 0 && count !== 0
          ? "🔥 You're on fire!"
          : ""}
      </p>

      {/* Counter Display */}
      <div className="text-6xl font-bold mb-8">{count}</div>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button
          onClick={() => { 
            increment();
            contextData.increment()
           }}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Increment 🚀
        </button>
        <button
          onClick={() => { 
            decrement();
            contextData.decrement();
          }}
          className="bg-red-500 hover:bg-red-600 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 shadow-lg transform hover:scale-105"
        >
          Decrement 👎
        </button>
      </div>

      {/* Footer message */}
      <p className="mt-8 text-sm text-white opacity-75">
        Keep clicking, who knows what happens at 100? 😏
      </p>
    </div>
  );
};

export default Counter;
