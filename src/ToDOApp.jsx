import { useReducer, useState } from "react";
import styles from "./ToDoApp.module.css";

const initialState = [];

const reducer = (state, action) => {
  switch (action.type) {
    case "Add":
      return [...state, action.payload];
    case "toggle":
      return state.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    default:
      return state;
  }
};

const ToDoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [text, setText] = useState("");


  const handleAdd = () => {
    if (text.trim() ) {
      const newTodo = {
        id: Date.now(),
        text,
       
        completed: false,
      };
      dispatch({ type: "Add", payload: newTodo });
      setText("");
    
    }
  };

  const handleDelete = (id) => dispatch({ type: "delete", payload: id });
  const handleToggle = (id) => dispatch({ type: "toggle", payload: id });

  return (
    <div className={styles.Container}>
      <h3 className={styles.title}>To-Do List Management System</h3>

      <div>
        <input
          type="text"
          placeholder="Task title"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        
        <button onClick={handleAdd} className={styles.AddBtn}>
          Add
        </button>
      </div>

      <ol>
        {state.map((item) => (
          <li
            key={item.id}
            style={{
              textDecoration: item.completed ? "*" : "none",
            }}
          >
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => handleToggle(item.id)}
            />
            <span style={{ marginLeft: "8px" }}>
              {item.text} — {item.descrip}
            </span>
            <button
              onClick={() => handleDelete(item.id)}
              className={styles.AddBtn2}
            >
              Delete
            </button>
            <button
              onClick={() => handleToggle(item.id)}
              className={styles.AddBtn2}
            >
              {item.completed ? "Undo" : "Completed"}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ToDoApp;
