import React,{useState} from 'react'

const CreateTodo = ({todoList, setTodoList}) => {
    const [todo, setTodo] = useState("")

    function handleSubmit (e) {
        e.preventDefault();
        let lastElement = todoList[todoList.length-1];
        let lastId = lastElement?lastElement.id:0;
        let obj = {
            id : lastId + 1 ,
            title : todo
        }
        setTodoList([...todoList,obj])
        setTodo('')

    }

  return (
    <div>
        <h1>TodoList</h1>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Enter Todo..." value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button type='submit'>Add Todo</button>
        </form>
    </div>
  )
}

export default CreateTodo