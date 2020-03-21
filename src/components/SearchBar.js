import React from 'react';

class SearchBar extends React.Component {

    state = { task: '' };

    constructor(props) {
        super(props)
        this.state = { task: '' };
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange = (event) => {
        this.setState({ task: event.target.value})
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmitCallback(this.state.task);
        this.setState({ task: '' })
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Add Task</label>
                        <input type="text" value={this.state.task} onChange={this.onInputChange} />
                    </div>
                </form> 
            </div>
        );
    }
}

export default SearchBar;