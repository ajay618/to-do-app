import React, { useState,useRef,useEffect } from 'react';
import './ToDo.css';
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

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

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addToDo();
        }
    };

    const inputRef = useRef ('null')

    useEffect(()=>{
        inputRef.current.focus();
    })

    return (
        <div className='container'>
            <h2>TODO APP</h2>
            <form className='form-group' onSubmit={handleSubmit}>
                <input
                    type="text"
                    ref={inputRef}
                    value={todo}
                    placeholder='Enter your Todo'
                    className='form-control'
                    onChange={(event) => setTodo(event.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <button type="button" onClick={addToDo}>ADD</button>
            </form>
            <div className='list'>
                <ul>
                    {todos.map((todo, index) => (
                        <li className='list-items' key={index}>
                            <div className='list-item-list'> {todo}</div>  
                        <span>
                            <IoMdDoneAll className='list-item-icons' id='complete' title='Complete'/>
                            <FiEdit className='list-item-icons' id='edit' title='Edit'/>
                            <MdDelete className='list-item-icons' id='delete' title='Delete'/>
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;