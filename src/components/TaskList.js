import React from 'react';
import TaskItem from './TaskItem';

class TaskList extends React.Component {
    render() {
        const { taskList, onRemoveCallback, onCompleteCallback } = this.props;
        return (
            <div>
                {taskList.map((item, index) => (
                <TaskItem key={index} tag={index} task={item} onRemoveCallback={onRemoveCallback} onCompleteCallback={onCompleteCallback} />
              ))}
            </div>
        );
    }
}

export default TaskList;