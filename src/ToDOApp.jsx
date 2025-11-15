import { useReducer, useState } from "react";

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
    if (text.trim()) {
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
    <div className="bg-purple-300 p-6 text-white flex flex-col  h-screen w-full items-center">
      <div className="bg-white rounded-lg item-center w-2xm-10 flex flex-col p-10 ">
        <h3 className="bg-gray-50 text-black text-xl font-bold p-3   ">
          To-Do List Management System
        </h3>

        <div className="mt-4 flex gap-2 w-full">
          <input
            type="text"
            placeholder="Task title"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="px-3 py-2 rounded border border-gray-300 text-black w-full"
          />

          <button
            onClick={handleAdd}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add
          </button>
        </div>

        <ol className="mt-6 space-y-3">
          {state.map((item) => (
            <li
              key={item.id}
              className="flex items-center gap-3 bg-gray-200 p-2  rounded-lg  text-black"
            >
              <input className="text-2xl font-bold cursor-pointer"
                type="checkbox"
                checked={item.completed}
                onChange={() => handleToggle(item.id)}
              />

              <span className={item.completed ? "line-through" : ""}>
                {item.text}
              </span>

              <button
                onClick={() => handleDelete(item.id)}
                className={item.completed ? "ml-auto text-red-500 px-3 py-1 rounded hover:bg-red-600 " :"hidden"} 
              >
                Delete
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default ToDoApp;


           
