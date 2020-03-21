import React from 'react';
import SearchBar from './SearchBar';
import TaskList from './TaskList';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            taskList: []
        };
    }

    onFormSubmit = (newTask) => {
        this.setState({ taskList: [...this.state.taskList, newTask] });
    };

    onRemoveItem = (key) => {
        var array = [...this.state.taskList]; 
        if (key !== -1) {
            array.splice(key, 1);
            this.setState({taskList: array});
        }
    };

    render() {
        const { taskList } = this.state;
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmitCallback={this.onFormSubmit}/>
            <div className="ui segment">
                <div className="ui middle aligned divided list">
                    <TaskList taskList={taskList} onRemoveCallback={this.onRemoveItem}/>
                </div>
            </div>
        </div>
    };
}

export default App;