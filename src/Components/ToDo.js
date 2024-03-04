import React from 'react'
import './ToDo.css'

function ToDo() {
  return (
    <div className='container'>
      <h2> TODO APP</h2>
      <form className='form-group'>
        <input type="text" placeholder='Enter your Todo' className='form-control'/>
        <button>ADD</button>
      </form>
      <div className='list'>
        <ul>
            <li  className='form-control'>First</li>
            <li  className='form-control'>Second</li>
            <li  className='form-control'>Third</li>
        </ul>
      </div>
    </div>
  )
}

export default ToDo
