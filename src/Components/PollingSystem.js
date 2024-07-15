import React, { useState } from "react";

const PollingSystem = () => {
  const [options, setOptions] = useState([
    { id: 1, name: "Option A", votes: 0 },
    { id: 2, name: "Option B", votes: 0 },
    { id: 3, name: "Option C", votes: 0 },
    { id: 4, name: "Option D", votes: 0 },
  ]);

  const handleVote = (id) => {
    const newOptions = options.map((option) =>
      option.id === id ? { ...option, votes: option.votes + 1 } : option
    );
    setOptions(newOptions);
  };

  const sortedOptions = [...options].sort((a, b) => b.votes - a.votes);

  return (
    <div className="text-black max-w-md mx-auto mt-8 p-4 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">Polling System</h2>
      {sortedOptions.map((option, index) => (
        <div key={option.id} className="flex justify-between items-center mb-2">
          <p className="text-lg">{`#${index + 1} ${option.name}`}</p>
          <div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => handleVote(option.id)}
            >
              Vote
            </button>
            <span className="ml-2">{option.votes} votes</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PollingSystem;
