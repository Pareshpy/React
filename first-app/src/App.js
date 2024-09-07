import React, { useState, useEffect } from 'react';

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count , setCount] = useState(0);

  // Function to fetch advice
  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    setAdvice(data.slip.advice);
    setCount((c) => c + 1);
  };

  //  setInterval(() => {
  //     fetchAdvice();
  //   }, 5000);

  return (
    <div className='flex flex-row min-h-screen justify-center items-center'>
      <div className='text-center'>
          <h1 className='text-3xl mb-5'>{advice}</h1>
          {/* You can still add a button to manually get advice */}
          <button onClick={fetchAdvice} type="button" className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get Advice</button>
          <p>{count} Advice</p>
      </div>
    </div>
  );
}