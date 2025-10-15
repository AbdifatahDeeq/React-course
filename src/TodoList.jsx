import { useState } from "react";

const Todolist = () => {
  const [toDos, setTodo] = useState([]);
  const [userInput, setUserinput] = useState("");

  const Add = () => {
    if (userInput.trim() === "") return; // prevent empty todos

    const newToDo = {
      id: crypto.randomUUID(),
      Text: userInput,
      completed: false,
    };

    setTodo([...toDos, newToDo]);
    setUserinput("");
  };

  // ✅ Toggle completed status
  const toggleComplete = (id) => {
    setTodo(
      toDos.map((toDo) =>
        toDo.id === id ? { ...toDo, completed: !toDo.completed } : toDo
      )
    );
  };

  return (
    <div>
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Enter New To Do"
        onChange={(e) => setUserinput(e.target.value)}
        value={userInput}
      />
      <button onClick={Add}>Add</button>

      <ul>
        {toDos.map((toDo) => (
          <li
            key={toDo.id}
            onClick={() => toggleComplete(toDo.id)}
            style={{
              cursor: "pointer",
              textDecoration: toDo.completed ? "line-through" : "none",
              color: toDo.completed ? "gray" : "black",
            }}
          >
            {toDo.Text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
