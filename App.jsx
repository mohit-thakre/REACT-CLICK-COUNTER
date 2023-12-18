import { useState } from "react";

function App() {
  let [value, setvalue] = useState(10);

  function increment() {
    if (value < 20) {
      value++;
      setvalue(value);
    } else {
      alert("Click counter limit exceed");
    }
  }
  function decrement() {
    if (value > 0) {
      value--;
      setvalue(value);
    } else {
      alert("Click counter limit exceed");
    }
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-teal-500 to-purple-600">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center text-white">
        <h1 className="text-4xl font-extrabold mb-6 text-yellow-300">
          Counter Project
        </h1>
        <h3 className="text-2xl mb-6">Counter value: {value}</h3>
        <div className="flex justify-center space-x-4">
          <button
            onClick={increment}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full"
          >
            Add +1
          </button>
          <button
            onClick={decrement}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full"
          >
            Remove -1
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
