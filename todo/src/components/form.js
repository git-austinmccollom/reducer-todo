import React from 'react';

export default function Form(props) {

    const { dispatch } = props

    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(new Date())
        dispatch({ 
            type: 'ADD', 
            payload: {
            id: new Date(),
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
                    />
                </label>
                <input type='submit' value='Add' ></input>
            </form>
        </div>
    )
}