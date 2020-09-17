import React from 'react';
import Todo from './todo';


export default function List(props) {
    const { dispatch, todos } = props
    return(
        <ul>
            {
                todos.map( (todo) => {
                    return <Todo key={todo.id} dispatch={dispatch} todo={todo}/>
                })
            }
        </ul>
    )
}