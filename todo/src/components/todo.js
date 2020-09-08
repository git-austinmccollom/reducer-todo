import React, { useState } from 'react';

export default function Todo(props) {
    const { todo } = props
    return(
        <li>
            {
                todo.item
            }
        </li>
    )
}