import React, { Component } from "react";

class BasicSearch extends Component {

    state = {
        location: "",
        biketype: "",
        difficulty: "",
    };

    onFormSubmit(e) {
        console.log('basic search on form submit')
        e.preventDefault();
        let type =

            this.setState({ [name]: value });

        console.log('state: ', this.state)
    }

    onChange = event => {
        let value = event.target.value
        let name = event.target.name
        console.log('on change name: ', name)
        console.log('on change value: ', value)
        this.setState({ [name]: value });
    };

    render() {
        return (
            <div>
                <h2>Where would you like to ride?</h2>
                <div>
                    <input
                        type='text'
                        placeholder='city, zipcode, etc.'
                        name='location'
                        onChange={e => this.onChange(e)}
                    >
                    </input>
                </div>
                <div>
                    <label>Ride Type:</label>
                    <select
                        name='type'
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <option value='road'>Road Bike</option>
                        <option value='mountain'>Mountain Bike</option>
                        <option value='other'>Other</option>
                    </select>
                </div>
                <div>
                    <label>Ride Difficulty:</label>
                    <select name='difficulty'>
                        <option value='easy'>Easy</option>
                        <option value='medium'>Medium</option>
                        <option value='hard'>Hard</option>
                    </select>
                </div>
                <button onClick={e => this.onFormSubmit(e)}>
                    Find Your Mates!
                </button>
            </div>
        );
    }
}

export default BasicSearch;

// required
// id="where-id"
// label="Where"
// className={classes.textField}
// value={this.state.where}
// onChange={this.handleChange("where")}
// placeholder="Destination"
// margin="none"
// fullWidth
// />
// <br />
// <br />
// <FormControl className={classes.formControl} margin="none">
// <InputLabel htmlFor="bike-type-simple">Type of Biking</InputLabel>
// <Select
//     id="bike-type"
//     fullWidth
//     value={this.state.biketype}
//     onChange={this.handleChange("biketype")}
//     input={<Input id="bike-type-simple" />}
// >
//     <MenuItem value="">
//         <em>None</em>
//     </MenuItem>
//     <MenuItem value="Mountain Bike">Mountain Bike</MenuItem>
//     <MenuItem value="Road Bike">Road Bike</MenuItem>
//     <MenuItem value="Hybrid">Hybrid</MenuItem>
// </Select>
// </FormControl>
// <br />
// <br />
// <FormControl className={classes.formControl} margin="none">
// <InputLabel htmlFor="age-simple">Level of Difficulty</InputLabel>
// <Select
//     id="difficulty"
//     fullWidth
//     value={this.state.difficulty}
//     onChange={this.handleChange("difficulty")}
//     input={<Input id="difficulty-simple" />}
// >
//     <MenuItem value="">
//         <em>None</em>
//     </MenuItem>
//     <MenuItem value="Easy (15 - 25 miles)">
//         Easy (15 - 25 miles)
// </MenuItem>
//     <MenuItem value="Intermediate (25 - 45 miles)">
//         Intermediate (25 - 45 miles)
// </MenuItem>
//     <MenuItem value="Hard (Above 50 miles)">
//         Hard (Above 50 miles)
// </MenuItem>
// </Select>
// </FormControl>
// </CardContent>

// <CardActions>

// <Button
// color="primary"
// className="rm-main-button"
// onClick={this.submitChange}
// >
// Find Mates!
// </Button>


// </CardActions>
// </Card >