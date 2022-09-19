import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {id:1 , title:'book' , state:true , dec:'fatemeh lavasi'},
    {id:2 , title:"book1" , state:true , dec:"nazi lavasi"},
    {id:3 , title:"book2" , state:true , dec:"ali lavasi"},
    {id:4 , title:"book3" , state:true , dec:"mohammad lavasi"}
  ])
  const [form, setForm] = useState({ title: '', dec: '' })
  const [FormStatus, setFormStatus] = useState({ title: '', dec: '' })
  const handeleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }
  const handelCheck = id => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, state: !todo.state } : todo))
  }
  const handleChange = event => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault()
    if (FormStatus === 'add') {
      setTodos([...todos, { id: Math.floor(Math.random() * 1000), name: form.name, lastName: form.lastName, state: false }])
    }
    else {
      setTodos(todos.map(todo => todo.id === form.id ? form : todo))
    }
    setForm({ title: '', dec: '' })
    setFormStatus('add')
  }
  const handleUpdate = todo => {
    setFormStatus('upDate')
    setForm(todo)
  }
  return (
    <div >
      <div >
        <div >
          <form onSubmit={handleSubmit} style={{ margin: "10px" , display:'flex' , flexDirection:'column' ,gap:'10px'}}>
            <label>title:</label>
            <input onChange={handleChange} name={'title'} value={form.title} />
            <label>dec:</label> 
            <input onChange={handleChange} name={'dec'} value={form.dec} />
            <button type={'submit'}  style={{width:'10%' , height:'30px'}}>
              {FormStatus === 'add' ? 'submit' : 'update'}
            </button>
          </form>
        </div>
      </div>
      <div >
      {todos.map(todo => (
        <div style={{margin:'30px' , border:'1px solid blue' , padding:'20px'}}>
          <div>
            id:{todo.id}
          </div>
          <div>
            title : {todo.title}
          </div>
          <div onClick={() => handelCheck(todo.id)} style={{cursor:'pointer'}}>
            state:{todo.state ? 'True' : ' False'}
          </div>
          <div>
            description:{todo.dec}
          </div>
          <button onClick={() => handeleDelete(todo.id)}>
            delete
          </button>
          <button onClick={() => handleUpdate(todo)}>
            upDate
          </button>
        </div>
      ))}
      </div>
    </div>
  );
}

export default App;
