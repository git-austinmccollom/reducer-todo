import React from 'react';
import Todo from './todo';


export default function List(props) {
    const { todos } = props
    return(
        <ul>
            {
                todos.map( (item) => {
                    return <Todo key={item.id} todo={item}/>
                })
            }
        </ul>
    )
}