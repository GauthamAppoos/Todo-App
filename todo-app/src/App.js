//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [todoName, setTodoName] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [todoIndex, setTodoIndex] = useState(1);
  
  const addTodo = () => {
    //console.log(todoName);

    let todoItemList = todoList;
    todoItemList.push({name: todoName, key: todoIndex});

    setTodoList(todoItemList);
    setTodoName('');
    setTodoIndex(todoIndex +1);
  }

  const removeTodoItem = (key) =>{
    let todoItemList = todoList.filter(todo => todo.key !== key);
    setTodoList(todoItemList);
  }

  return (
    <div className="App">
      <input type = "text" onChange={(e) => setTodoName(e.target.value)}/>
      <button onClick={addTodo}>Add todo</button>

      <ul>
        {todoList && todoList.length>0 && todoList.map( todo =>{
          return (

            <div key = {todo.key}>
              <li>{todo.name} <button onClick={() => removeTodoItem(todo.key)}>X</button></li>
            </div>
          )
        })}
      </ul>
    </div>
  );
}

export default App;
