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
            setTodos([...todos, { list : todo , id : Date.now() ,complete : false }]);
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

    const onDelete = (id) => {
        const updatedTodos = todos.filter((todo) => todo.id !== id);
        setTodos(updatedTodos);
    };

    const statusComplete = (id) => {
        let complete = todos.map ((todos) => {
            if (todos.id === id ){
                return ({...todos , complete : !todos.complete })
            }
            return todos 
        })
       setTodos(complete)
    }

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
                            <div className='list-item-list' id= {todo.complete ? "list-item" : ''}> {todo.list}</div>  
                        <span>
                            <IoMdDoneAll 
                            className='list-item-icons' 
                            id='complete' 
                            title='Complete'
                            onClick={() => statusComplete(todo.id)}/>

                            <FiEdit className='list-item-icons' id='edit' title='Edit'/>
                            <MdDelete 
                            className='list-item-icons' 
                            id='delete' 
                            title='Delete'
                            onClick={() => onDelete(todo.id)}
                            />
                        </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default ToDo;