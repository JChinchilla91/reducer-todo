import React, { useState, useReducer } from 'react';
import { todoReducer, initialTodoState } from '../reducers/reducer'

import '../index.css'

const TodoList = () => {
    const [todoState, dispatch] = useReducer(todoReducer, initialTodoState);

    const [task, setTasks] = useState('');

    const addTodo = e => {
        e.preventDefault();
        let todo = {
            task: task,
            id: Date.now(),
            completed: false
        }
    }

    const handleChanges = e => {
        setTasks(e.target.value)
    }

    return (
        <div className='shopping-list'>
            {todoState.todos.map(todo => {
                return  <p className={`item${todo.completed ? ' done' : ''}`} 
                onClick={() => dispatch({type: 'TOGGLE_DONE', payload: todo.id})}>
                    {todo.task}
                </p>
            })}
            <form onClick={(e) => e.preventDefault()}>
                <input type='text' value={task} onChange={handleChanges} />
                <button onClick={() => dispatch({ type: 'ADD_TODO', payload: task})}>Add Todo!</button>
                <button onClick={() => dispatch({ type: 'CLEAR_COMPLETED' })}>Clear what's done!</button>
            </form>
        </div>
    )

}

export default TodoList;