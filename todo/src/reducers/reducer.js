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
            console.log('add');
            return { todoArray: [...state.todoArray, action.payload] }
        case 'TOGGLE_COMPLETE':
            console.log('toggle complete');
            return { todoArray: state.todoArray.map( (item) => {
                if ( item.id === action.payload ) {
                    return {...item, completed: !item.completed};
                } else {
                    return {...item};
                }
            }) }
        case 'CLEAR':
            console.log('clear');
            // return {...state}
            const arrayCopy = [];
            state.todoArray.forEach( (item) => {
                if ( item.completed === false ) {
                    console.log('remaining')
                    arrayCopy.push(item)
                } 
            })

            return { todoArray: arrayCopy }
    }
}

export {
    initialState,
    reducer,
}