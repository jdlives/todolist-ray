const addTodo = string => ({ type: 'DO_ADD', payload: {details: string, ongoing: true} });
const spliceTodo = index => ({ type: 'DO_SPLICE', payload: {tag: index} });
const toggleTodo = index => ({ type: 'DO_TOGGLE', payload: {tag: index} });
const updateTodoDetails = (index, string) => ({ type: 'DO_UPDATE', payload: {tag: index, details: string} });


export default {
    addTodo,
    spliceTodo,
    toggleTodo,
    updateTodoDetails
  };