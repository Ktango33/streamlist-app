import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Input from "./components/Input";
import StreamList from "./components/StreamList";
import Movies from "./components/Movies";
import "./App.css";

function App() {
  // Initialize streams from localStorage or empty array
  const [streams, setStreams] = useState(() => {
    const saved = localStorage.getItem("streams");
    return saved ? JSON.parse(saved) : [];
  });

  // Save streams to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("streams", JSON.stringify(streams));
  }, [streams]);

  // Add a new stream
  const addStream = (text) => {
    const newStream = { id: Date.now(), text, completed: false };
    setStreams([...streams, newStream]);
  };

  // Toggle completed state
  const toggleComplete = (id) => {
    setStreams(
      streams.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  // Delete a stream
  const deleteStream = (id) => {
    setStreams(streams.filter((item) => item.id !== id));
  };

  // Edit a stream's text
  const editStream = (id, newText) => {
    setStreams(
      streams.map((item) => (item.id === id ? { ...item, text: newText } : item))
    );
  };

  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <ul className="nav-links">
            <li>
              <Link to="/">StreamList</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <main className="main-content">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Input onAdd={addStream} />
                  <StreamList
                    streams={streams}
                    toggleComplete={toggleComplete}
                    deleteStream={deleteStream}
                    editStream={editStream}
                  />
                </>
              }
            />
            <Route path="/movies" element={<Movies />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;