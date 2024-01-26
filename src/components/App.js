
import React,{useState} from "react";
import './../styles/App.css';
import CreateTodo from "./CreateTodo";
import DisplayTodo from "./DisplayTodo";

const App = () => {

  const [todoList, setTodoList] = useState([])

  return (
    <div>
        {/* Do not remove the main div */}

        <CreateTodo todoList={todoList}
        setTodoList={setTodoList}/>

        <DisplayTodo  todoList={todoList}
        setTodoList={setTodoList}/>

    </div>
  )
}

export default App
