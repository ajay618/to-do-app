import React, { useState } from 'react';
import './ToDo.css';

function ToDo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const addToDo = () => {
        if (todo.trim() !== '') {
            setTodos([...todos, todo]);
            console.log(todos);
            setTodo('');
        }
    };

    return (
        <div className='container'>
            <h2>TODO APP</h2>
            <form className='form-group' onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={todo}
                    placeholder='Enter your Todo'
                    className='form-control'
                    onChange={(event) => setTodo(event.target.value)}
                />
                <button type="button" onClick={addToDo}>ADD</button>
            </form>
            <div className='list'>
                <ul>
                    {todos.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;