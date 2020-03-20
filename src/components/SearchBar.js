import React from 'react';

class SearchBar extends React.Component {

    state = { term: '' };

    constructor(props) {
        super(props)
        this.state = { term: 'initial' };
        this.onFormSubmit = this.onFormSubmit.bind(this)
    }

    onInputChange = (event) => {
        this.setState({ term: event.target.value.toUpperCase() })
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.onSubmitCallback(this.state.term);
    }

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Add Task</label>
                        <input type="text" value={this.state.term} onChange={this.onInputChange} />
                    </div>
                </form> 
            </div>
        );
    }
}

export default SearchBar;