import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import actions from '../actions';

class TodoItem extends React.Component {

    static propTypes = {
        todo: PropTypes.object.isRequired,
        spliceTodo: PropTypes.func.isRequired,
        toggleTodo:PropTypes.func.isRequired,
        updateTodoDetails: PropTypes.func.isRequired
    }

    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            details: props.todo.details
        }
    }

    onToggleEditingStatus = () => {
        this.setState({ isEditing: true });
    }

    handleRemove = (tag) => {
        const { spliceTodo } = this.props;
        spliceTodo(tag);
    }

    handleStatusToggle = (tag) => {
        const { toggleTodo } = this.props;
        toggleTodo(tag)
    }

    handleInputChange = (event) => {
        this.setState({ details: event.target.value})
    }

    handleFormSubmit(event, tag) {
        const { updateTodoDetails } = this.props;
        event.preventDefault();
        updateTodoDetails(tag,this.state.details);
        this.setState({ isEditing: false })
    }

    render() {
        const { tag, todo } = this.props;
        const { isEditing } = this.state;
        return (
            <div className="item" style={{display:"flex", padding:"3px"}} >
                <button
                    className={`ui toggle button ${todo.ongoing ? "active": "inactive" }`}
                    type="checkbox"
                    checked={todo.ongoing}
                    onClick={() => this.handleStatusToggle(tag)}
                >
                    {todo.ongoing ? "Active": "Done"}
                </button>

                <div className="content" onClick={this.onToggleEditingStatus} style={{width: "100%"}}>
						
                {isEditing ? (<div className="field">
                    <form onSubmit={(event) => this.handleFormSubmit(event,tag)} className="ui form">
                        <div className="field">
                            <input type="text" value={this.state.details} onChange={this.handleInputChange} />
                        </div>
                    </form> 
                </div>)
                :
                ( <div>
                    <h2 style={{textDecoration:todo.ongoing ? null: "line-through"}}>{todo.details}</h2>
                </div>
                    )
                }
                </div>
        
                <div className="ui button" onClick={() => this.handleRemove(tag)}>Remove</div>
                
            </div>
        );
    }
}

export default connect(null, actions)(TodoItem);