import React, { useState } from 'react';

const CardGrid = () => {
  const [cards, setCards] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [sidebarVisible, setSidebarVisible] = useState(false); // State to track sidebar visibility

  const addCard = () => {
    if (inputValue.trim()) {
      setCards([...cards, inputValue.trim()]);
      setInputValue('');
      setSidebarVisible(false); // Hide sidebar after adding the card
    }
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-between relative">
      

      <div className="p-8 mb-40">
        {/* Button to show the sidebar */}
        <div className="mb-6 flex justify-center">
          <button
            onClick={() => setSidebarVisible(true)} // Show sidebar when clicked
            className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((value, index) => (
            <div
              key={index}
              className="p-4 border rounded-md bg-gray-200 shadow-md flex items-center justify-center"
            >
              <img src={value} alt={`Card ${index}`} className="max-w-full max-h-full" />
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar for input, sliding from the left */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-6 transform transition-transform duration-300 ${
          sidebarVisible ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <h2 className="text-xl font-semibold mb-4">Enter Manga URL</h2>
        <input
          type="text"
          placeholder="Enter manga URL"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
        />
        <button
          onClick={addCard}
          className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600 w-full"
        >
          Submit
        </button>

        {/* Close button */}
        <button
          onClick={() => setSidebarVisible(false)} // Close sidebar
          className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 w-full"
        >
          Close
        </button>
      </div>

    
    </div>
  );
};

export default CardGrid;
