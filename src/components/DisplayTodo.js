import React from "react";

const DisplayTodo = ({ todoList, setTodoList }) => {


  function deleteTodo(id) {
    setTodoList(todoList.filter(item => item.id != id));
  }

  return (
    <div>
      <ul>
        {todoList.map(item => (
          <li key={item.id}>
            {item.title} <button onClick={() => deleteTodo(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisplayTodo;
