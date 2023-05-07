import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  const [userId, setUserId] = useState('');
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        if (userId) {
          const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
          const data = await response.json();
  
          if (data.length === 0) {
            setError('No todos found for this user ID');
            setTodos([]);
          } else {
            setTodos(data);
            setError('');
          }
        } else {
          setTodos([]);
          setError('Enter User Id to display todos');
        }
      } catch (error) {
        setError('Invalid user ID');
        setTodos([]);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    fetchTodos();
  }, [userId]);
  

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Task Manager</h1>
        <button className="theme-toggle" onClick={toggleTheme}>
          Theme
        </button>
      </div>

<div className="input-container">
        <label htmlFor="user-id">User ID:</label>
        <input
          type="number"
          id="user-id"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
      </div>

      <div className="todo-container">
      {todos.length > 0 && <h2>Todos:</h2>}        
      {todos.length > 0 && (
          <ul className="todo-list">
            {todos.map((todo) => (
              <li key={todo.id} className={todo.completed ? "completed" : ""}>
                {todo.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;


