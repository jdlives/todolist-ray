
function appendList (state, payload) {
    return  {
        ...state,
        todoList : [ ...(state.todoList ? state.todoList : []) , { details: payload.details, ongoing: payload.ongoing }]
    }
};

function spliceList (state, payload) {
    var array = [...state.todoList];
    var tag = payload.tag
    if (payload.tag !== -1) {
        array.splice(tag, 1);
        return {
            ...state,
            todoList : [...array]
        }
    }
};

function toggleTodo (state, payload) {
    var array = [...state.todoList];
    var tag = payload.tag
    array[tag].ongoing = !array[tag].ongoing
    return {
        ...state,
        todoList: array
    }
};

function getSingleTodo (state, payload) {
    return {
        ...state,
        selectedTodo: state.todoList[payload.tag]
    }

}


const initialState = {
    todoList: [],
    selectedTodo: null,

}

export default function (state = initialState, action) {
    switch (action.type) {
        case 'DO_ADD':
            return appendList(state, action.payload)
        case 'DO_SPLICE':
            return spliceList(state, action.payload)
        case 'DO_TOGGLE':
            return toggleTodo(state, action.payload)
        case 'DO_GET_TODO':
            return getSingleTodo(state, action.payload)
        default:
            return state;
    }
}
