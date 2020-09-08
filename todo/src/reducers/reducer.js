const initialState = {
    todoArray: [
        {
            id: 1,
            item: "take out trash",
            completed: false
        },
        {
            id: 2,
            item: "Put shoes, bandana, and hat in room",
            completed: false
        },
        {
            id: 3,
            item: "Clean roof",
            completed: false
        },
        {
            id: 4,
            item: "Clean room",
            completed: false
        }
    ]
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD':
            console.log(action.payload)
            console.log(action);
            console.log(state);
            // [...state.todoArray, action.payload]
            return { todoArray: [...state.todoArray, action.payload] }
    }
    return ;
}

export {
    initialState,
    reducer,
}