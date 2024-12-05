import React, { useState } from 'react';

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleAddClick = () => {
    if (input.trim() !== '') {
      addTodo(input);
      setInput('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAddClick}>Add</button>
    </div>
  );
}

export default TodoInput;
