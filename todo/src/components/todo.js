import React, { useState } from 'react';
import '../App.css';

export default function Todo(props) {
    const { dispatch, todo } = props;

    return(
        <li className={ todo.completed === true? "complete" : null } onClick={ () => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })}>
            {
                todo.item
            }
        </li>
    )
}