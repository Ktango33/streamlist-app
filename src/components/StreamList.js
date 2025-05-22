import React, { useState } from 'react';
import { FaCheckCircle, FaEdit, FaTrash } from 'react-icons/fa';

function StreamList() {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newItem = {
      id: Date.now(),
      text: input,
      completed: false
    };
    setItems([...items, newItem]);
    setInput('');
  };

  const toggleComplete = (id) => {
    setItems(
      items.map(item =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
  };

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEditSubmit = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, text: editText } : item
    ));
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="streamlist">
      <h2>My StreamList</h2>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a movie or show"
        />
        <button type="submit">Add</button>
      </form>

      <ul className="item-list">
        {items.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSubmit(item.id)}>Save</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <div className="icons">
                  <FaCheckCircle onClick={() => toggleComplete(item.id)} title="Complete" />
                  <FaEdit onClick={() => handleEdit(item.id, item.text)} title="Edit" />
                  <FaTrash onClick={() => handleDelete(item.id)} title="Delete" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default StreamList;