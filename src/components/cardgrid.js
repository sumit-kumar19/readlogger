// import React, { useState } from "react";

// const CardGrid = () => {
//   const [cards, setCards] = useState([]);
//   const [inputValue, setInputValue] = useState("");
//   const [sidebarVisible, setSidebarVisible] = useState(false); // State to track sidebar visibility

//   const addCard = () => {
//     if (inputValue.trim()) {
//       setCards([...cards, inputValue.trim()]);
//       setInputValue("");
//       setSidebarVisible(false);
//     }
//   };

//   return (
//     <div className="bg-gray-200 min-h-screen flex flex-col justify-between relative ">
//       <div className="p-8 mb-40">
//         {/* Button to show the sidebar */}
//         <div className="mb-6 flex justify-center">
//           <button
//             onClick={() => setSidebarVisible(true)} // Show sidebar when clicked
//             className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600"
//           >
//             Add
//           </button>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {cards.map((value, index) => (
//             <div
//               key={index}
//               className="p-4 border rounded-md bg-gray-200 shadow-md flex items-center justify-center"
//             >
//               <img
//                 src={value}
//                 alt={`Card ${index}`}
//                 className="max-w-full max-h-full"
//               />
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Sidebar for input, sliding from the left */}
//       <div
//         className={`fixed top-0 left-0 h-full w-64 mt-9 bg-gray-800 text-white p-6 transform transition-transform duration-300 ${
//           sidebarVisible ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <h2 className="text-xl font-semibold mb-4">Enter Manga URL</h2>
//         <input
//           type="text"
//           placeholder="Enter manga URL"
//           value={inputValue}
//           onChange={(e) => setInputValue(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4 text-black"
//         />
//         <button
//           onClick={addCard}
//           className="px-6 py-2 bg-indigo-500 text-white rounded-md shadow hover:bg-indigo-600 w-full"
//         >
//           Submit
//         </button>

//         {/* Close button */}
//         <button
//           onClick={() => setSidebarVisible(false)} // Close sidebar
//           className="mt-4 px-6 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600 w-full"
//         >
//           Close
//         </button>
//       </div>
//     </div>
//   );
// };

// export default CardGrid;

"use client";

import { useState } from "react";

export default function MangaCardGrid() {
  const [cards, setCards] = useState([]); // No type annotations needed in JS
  const [inputValue, setInputValue] = useState("");
  const [name, setName] = useState("");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const addCard = () => {
    if (inputValue.trim()) {
      setCards([...cards, inputValue.trim()]);
      setInputValue("");
      setSidebarVisible(false);
    }
  };
  const fetchUrl = async (url) => {
    console.log("fetching URL", url);
    const data = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ url }),
    };
    await fetch("http://localhost:5000/manga", data)
      .then(async (response) => {
        if (response.ok) {
          var jdata = await response.json();
          setName(jdata.name);
          return jdata;
        } else {
          alert("Failed to add manga");
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-between relative">
      <div className="container mx-auto p-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Manga Collection</h1>
          <button
            onClick={() => setSidebarVisible(true)}
            className="px-6 py-2 bg-black text-white rounded-md shadow transition-colors"
          >
            Add Manga
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {cards.map((value, index) => (
            <div
              key={index}
              className="p-4 border rounded-md bg-white shadow-md flex items-center justify-center aspect-[3/4]"
            >
              <img
                src={value}
                alt={`Manga cover ${index + 1}`}
                className="max-w-full max-h-full object-cover rounded"
              />
            </div>
          ))}
        </div>
      </div>

      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setSidebarVisible(false)}
        />
      )}

      <div
        className={`fixed top-20 right-0 h-full w-80 bg-white text-gray-800 p-6 transform transition-transform duration-300 shadow-lg ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Add manga sidebar"
      >
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={() => setSidebarVisible(false)}
          aria-label="Close sidebar"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-xl font-semibold mb-4">Add New Manga : </h2>
        <input
          type="url"
          placeholder="https://example.com/manga-cover.jpg"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 mb-4"
          aria-label="Manga cover URL input"
        />
        <button
          onClick={() => { fetchUrl(inputValue); addCard(); }}
          className="w-full px-6 py-2 bg-black text-white rounded-md shadow hover:bg-gray-800 transition-colors"
        >
          Add to Collection
        </button>
      </div>
    </div>
  );
}
