import React, { Component } from "react";

class BasicSearch extends Component {

    state = {
        location: "",
        type: "road",
        difficulty: "easy",
    };

    onSubmit = e => {
        e.preventDefault();
    }

    onChange = e => {
        let value = e.target.value
        let name = e.target.name
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h2>Where would you like to ride?</h2>
                    <div>
                        <input
                            type='text'
                            placeholder='city, zipcode, etc.'
                            name='location'
                            onChange={this.onChange}
                        >
                        </input>
                    </div>
                    <div>
                        <label>Ride Type:</label>
                        <select 
                            name='type'
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <option value='road'>Road Bike</option>
                            <option value='mountain'>Mountain Bike</option>
                            <option value='other'>Other</option>
                        </select>
                    </div>
                    <div>
                        <label>Ride Difficulty:</label>
                        <select
                            name='difficulty'
                            value={this.state.value}
                            onChange={this.onChange}
                        >
                            <option defaultValue value='easy'>Easy</option>
                            <option value='medium'>Medium</option>
                            <option value='hard'>Hard</option>
                        </select>
                    </div>
                    <button>
                        Find Your Mates!
                    </button>
                </form>
            </div>
        );
    }
}

export default BasicSearch;
