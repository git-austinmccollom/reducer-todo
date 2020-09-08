import React, { useState } from 'react';

export default function Todo(props) {
    const { dispatch, todo } = props;

    return(
        <li onClick={ () => dispatch({ type: 'TOGGLE_COMPLETE', payload: todo.id })}>
            {
                todo.item
            }
        </li>
    )
}