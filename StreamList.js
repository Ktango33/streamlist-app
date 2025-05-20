import React, { useState } from 'react';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      setItems([...items, input]); // Add input to list
      setInput('');
    }
  };

  return (
    <div>
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a movie or show"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;