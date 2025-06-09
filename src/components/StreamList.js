import React, { useState } from 'react';
import { FaCheckCircle, FaEdit, FaTrash } from 'react-icons/fa';
import PropTypes from 'prop-types'; // Import PropTypes

function StreamList({ streams, toggleComplete, deleteStream, editStream }) {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEdit = (id, text) => {
    setEditingId(id);
    setEditText(text);
  };

  const handleEditSubmit = (id) => {
    if (editText.trim() === '') return; // prevent empty edits
    editStream(id, editText); // call parent function to update text
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="streamlist">
      <h2>My StreamList</h2>
      <ul className="item-list">
        {streams.map((item) => (
          <li key={item.id} className={item.completed ? 'completed' : ''}>
            {editingId === item.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={() => handleEditSubmit(item.id)}>Save</button>
                <button onClick={() => setEditingId(null)}>Cancel</button>
              </>
            ) : (
              <>
                <span>{item.text}</span>
                <div className="icons">
                  <FaCheckCircle onClick={() => toggleComplete(item.id)} title="Complete" />
                  <FaEdit onClick={() => handleEdit(item.id, item.text)} title="Edit" />
                  <FaTrash onClick={() => deleteStream(item.id)} title="Delete" />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Add PropTypes for prop validation
StreamList.propTypes = {
  streams: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  toggleComplete: PropTypes.func.isRequired,
  deleteStream: PropTypes.func.isRequired,
  editStream: PropTypes.func.isRequired,
};

export default StreamList;