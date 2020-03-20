import React from 'react';

class TaskItem extends React.Component {
    render() {
        return (
            <div class="item">
                <div class="content">
                    Sample Task
                </div>
                <div class="right floated content">
                    <div class="ui button">Complete</div>
                    <div class="ui button">Remove</div>
                </div>
            </div>
        );
    }
}

export default TaskItem;