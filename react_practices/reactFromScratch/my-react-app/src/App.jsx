import Form from "./components/Form"
import Toggle from "./components/Toggle"
import Json from "./components/Json"
import Joke from "./components/Joke"
import Person from "./components/Person"
import Todos from "./components/Todos"
import Input from "./components/Input"
import { useState } from "react"

function App() {
  const [todos, setTodos] = useState(['Learn React', 'Master props']);
  const [input, setInput] = useState('')
  const handleChange = (e) => {
      setInput(e.target.value)
  } 
  const handleClick = () => {
    if (input.trim() === '') return; // prevent adding empty todos
    setTodos([...todos, input]);     // add new todo to list
    setInput('');
  }

  // const handleDelete = (indexToRemove) => {
  //   setTodos(todos.filter((_, index) => index !== indexToRemove));
  // };

  return (
    <div>
      <h1>Todo</h1>
      <Input value={input} onChange={handleChange} />
      <Todos todos={todos} handleClick={handleClick} />
      </div>
      // <div>
      //   <Person name='Taofeek Oluosla' age={20} occupation='Software Engineer' />
      // </div>
  )
}

export default App