import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import actions from "../actions";

class SearchBar extends React.Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired,
    };

    state = { task: "" };

    constructor(props) {
        super(props);
        this.state = { task: "" };
    }

    onInputChange = (event) => {
        this.setState({ task: event.target.value });
    };

    onFormSubmit = (event) => {
        const { addTodo } = this.props;
        event.preventDefault();
        addTodo(this.state.task);
        this.setState({ task: "" });
    };

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <input
                            placeholder="Add a todo"
                            type="text"
                            value={this.state.task}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        );
    }
}

export default connect(null, actions)(SearchBar);
