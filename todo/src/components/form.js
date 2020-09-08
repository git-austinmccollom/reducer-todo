import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function Form(props) {

    const { dispatch } = props;
    const [inputValue, setInputValue ] = useState('');

    const handleChange = (evt) => {
        setInputValue(evt.target.value)
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ 
            type: 'ADD', 
            payload: {
            id: uuidv4(),
            item: 'add!',
            completed: false
            }
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Add Task: 
                    <input
                        type='text'
                        name='add todo'
                        value={inputValue}
                        onChange={handleChange}
                    />
                </label>
                <input type='submit' value='Add' ></input>
            </form>
        </div>
    )
}