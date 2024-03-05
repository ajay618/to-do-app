import React, { useState,useRef,useEffect } from 'react';
import './ToDo.css';
import { IoMdDoneAll } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";

function ToDo() {
    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);
    const [editId , setEditId ] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const addToDo = () => {
        if (todo !== '') {
            setTodos([...todos, { list : todo , id : Date.now() ,complete : false }]);
            setTodo('');
        }

        if (editId){ 
            const editToDo = todos.find((todo) => todo.id === editId)
            const updateToDo = todos.map( (to) =>to.id === editToDo.id 
            ? ( to = { id : to.id , list : todo , complete : to.complete })
            : ( to = { id : to.id , list : to.list , complete : to.complete  }))
            setTodos(updateToDo)
            setEditId(0)
            setTodo('')
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
        let toDocompleteChange = todos.map ((todos) => {
            if (todos.id === id ){
                return ({...todos , complete : !todos.complete })
            }
            return todos 
        })
       setTodos(toDocompleteChange)
    }

    const EditToDo = (id) => {
        const editTodo = todos.find((todo) => todo.id === id);
        if (editTodo) {
            setTodo(editTodo.list); 
            setEditId(editTodo.id)
        }
    };
    
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
                <button type="button" onClick={addToDo}>{ editId ? 'EDIT' : 'ADD' }</button>
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

                            <FiEdit 
                            className='list-item-icons' 
                            id='edit' 
                            title='Edit'
                            onClick={() => EditToDo(todo.id)}/>

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