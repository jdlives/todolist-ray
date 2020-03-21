
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

function updateDetails (state, payload) {
    var array = [...state.todoList];
    var tag = payload.tag
    array[tag].details = payload.details
    return {
        ...state,
        todoList: array
    }
};

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
        case 'DO_UPDATE':
            return updateDetails(state, action.payload)
        default:
            return state;
    }
}
