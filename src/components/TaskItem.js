import React from 'react';

class TaskItem extends React.Component {
    onClickDelete = (task) => {
        this.props.onRemoveCallback(task)
    }
    render() {
        const { tag, task, onRemoveCallback } = this.props;
        return (
            <div className="item">
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" />
                </div>
                <div className="content">
                    {task}
                </div>
                <div className="right floated content">
                    <div className="ui button" >Complete</div>
                    <div className="ui button" onClick={() => this.onClickDelete(tag)}>Remove</div>
                </div>
            </div>
        );
    }
}

export default TaskItem;