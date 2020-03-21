import React from 'react';

class TaskItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false
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
        console.log(event);
    }

    render() {
        const { tag, task } = this.props;
        const { isEditing } = this.state;
        return (
            <div className="item">
                {isEditing ? (<div className="field">
                    <input type="text" onChange={this.onInputChange} />
                </div>)
                :
                (<div className="content" onClick={this.onToggleEditingStatus} >
                    {task.ongoing ? <label>{task.description}</label>
                        : <label style={{textDecoration:'line-through'}}>{task.description}</label>
                    }
                    
                </div>)
                }
                
                <div className="right floated content">
                    <div className="ui button" onClick={() => this.onClickComplete(tag)}>Complete</div>
                    <div className="ui button" onClick={() => this.onClickDelete(tag)}>Remove</div>
                </div>
            </div>
        );
    }
}

export default TaskItem;