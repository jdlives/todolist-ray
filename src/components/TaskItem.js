import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            taskDescription: props.task.description
        }
    }

    onToggleEditingStatus = () => {
        this.setState({ isEditing: !this.state.isEditing });
    }

    onClickDelete = (tag) => {
        this.props.onRemoveCallback(tag);
    }

    onClickComplete = (tag) => {
        this.props.onCompleteCallback(tag)
    }

    onInputChange = (event) => {
        this.setState({ taskDescription: event.target.value})
    }

    onFormSubmit(event, tag) {
        event.preventDefault();
        this.props.onEditCallback(tag,this.state.taskDescription);
        this.setState({ isEditing: false })
    }

    render() {
        const { tag, task } = this.props;
        const { isEditing } = this.state;
        return (
            <div className="item" style={{display:"flex"}} >
                <button
                    className={`ui toggle button ${task.ongoing ? "active": "inactive" }`}
                    type="checkbox"
                    checked={task.ongoing}
                    onClick={() => this.onClickComplete(tag)}
                >
                    {task.ongoing ? "Active": "Done"}
                </button>

                <div className="content" onClick={this.onToggleEditingStatus} style={{width: "100%"}}>
						
                {isEditing ? (<div className="field">
                    <form onSubmit={(event) => this.onFormSubmit(event,tag)} className="ui form">
                        <div className="field">
                            <input type="text" value={this.state.taskDescription} onChange={this.onInputChange} />
                        </div>
                    </form> 
                </div>)
                :
                ( <div>
                    <h2 style={{textDecoration:task.ongoing ? null: "line-through"}}>{task.description}</h2>
                </div>
                    )
                }
                </div>
        
                <div className="ui button" onClick={() => this.onClickDelete(tag)}>Remove</div>
                
            </div>
        );
    }
}

export default TaskItem;