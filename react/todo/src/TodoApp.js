 // TodoApp.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo, deleteTodo, toggleTodo } from './todoSlice';

const TodoApp = () => {
  const [input, setInput] = useState('');
  const [editing, setEditing] = useState(null);
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() && editing === null) {
      dispatch(addTodo(input));
    } else if (editing !== null) {
      dispatch(updateTodo({ id: editing, text: input }));
      setEditing(null);
    }
    setInput('');
  };

  const handleEdit = (id, text) => {
    setInput(text);
    setEditing(id);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <input value={input} onChange={e => setInput(e.target.value)} />
      <button onClick={handleAddTodo}>{editing === null ? 'Add' : 'Update'}</button>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <span
              style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
              onClick={() => dispatch(toggleTodo(todo.id))}
            >
              {todo.text}
            </span>
            <button onClick={() => handleEdit(todo.id, todo.text)}>Edit</button>
            <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;
