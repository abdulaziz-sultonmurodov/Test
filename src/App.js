/* eslint-disable */
import "./index.css";
import { useState, useRef } from "react";

const generateId = (() => {
  let count = 1;

  return () => {
    return count++;
  };
})();

/**
 * This is a todo app with multiple bugs and badly written lines.
 * Can you fix these bugs and make code follow good practices?
 * В этом коде есть несколько багов и гавнокода, ты можешь это исправить?
 * Можно воспользоватся кодсандбоксом для исправления кода: https://codesandbox.io/s/new?file=/src/App.js:0-1806
 */

export default function App() {
  const [todos, setTodos] = useState([]);
  const [value, setValue] = useState("");
  const inputRef = useRef("foo");
  const addTodo = () => {
    const newTodo = {
      text: value,
      id: generateId(),
      complete: false,
    };
    todos.push(newTodo);
    setTodos(todos);
    setValue("");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure to delete this list?")) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      setTodos(newTodos);
    }
  };

  const handleComplete = (id) => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete };
        }
        return item;
      })
    );
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="button-add" onClick={addTodo}>
        Add
      </button>

      {todos &&
        todos.map((todo) => (
          <li key={todo.id}>
            {todo.complete ? (
              <strike className="strike-red">{todo.text}</strike>
            ) : (
              todo.text
            )}
            <button
              className={
                !todo.complete ? "button-complete" : "button-incomplete"
              }
              onClick={() => handleComplete(todo.id)}
            >
              {todo.complete ? "Incomplete" : "Complete"}
            </button>
            <button
              className="button-delete"
              onClick={() => handleDelete(todo.id)}
            >
              Delete
            </button>
          </li>
        ))}
    </div>
  );
}
