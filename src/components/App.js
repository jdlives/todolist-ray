import React from 'react';
import SearchBar from './SearchBar';
import TaskItem from './TaskItem';

class App extends React.Component {

    onFormSubmit = (term) => {
        console.log(term)
    };

    render() {
        return <div className="ui container" style={{marginTop: '10px'}}>
            <SearchBar onSubmitCallback={this.onFormSubmit}/>
            <div className="ui segment">
                <div class="ui middle aligned divided list">
                    <TaskItem />
                </div>
            </div>
        </div>
    };
}

export default App;