import React, { useState } from 'react';

function Input({ onAdd }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === '') return;
    onAdd(text);
    setText('');
  };

  return (
    <form className="input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a new item..."
        aria-label="Add new item"
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default Input;
