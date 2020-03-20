import React from 'react';

class TaskItem extends React.Component {
    render() {
        const { task } = this.props;
        return (
            <div className="item">
                <div className="ui toggle checkbox">
                    <input type="checkbox" name="public" />
                </div>
                <div className="content">
                    {task}
                </div>
                <div className="right floated content">
                    <div className="ui button">Complete</div>
                    <div className="ui button">Remove</div>
                </div>
            </div>
        );
    }
}

export default TaskItem;