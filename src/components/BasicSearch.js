import React, { Component } from "react";

class BasicSearch extends Component {

    state = {
        location: "",
        biketype: "",
        difficulty: "",
    };

    submitChange = (event, location, biketype, difficulty) => {
        event.preventDefault();

        // console.log("in signup submitchange");
        const searchObj = this.state;

        if (this.state.biketype === "Road Bike") {
            searchObj.biketype = "rideTypeRoad"
        }
        else if (this.state.biketype === "Mountain Bike") {
            searchObj.biketype = "rideTypeMountain"
        }
        else if (this.state.biketype === "Hybrid") {
            searchObj.biketype = "rideTypeOther"
        };

        if (this.state.difficulty === "Easy (15 - 25 miles)") {
            searchObj.difficulty = "difficultyEasy"
        }
        else if (this.state.difficulty === "Intermediate (25 - 45 miles)") {
            searchObj.difficulty = "difficultyIntermediate"
        }
        else if (this.state.difficulty === "Hard (Above 50 miles)") {
            searchObj.difficulty = "difficultyHard"
        };

        this.setState({
            where: "San Diego, CA",
            biketype: "",
            difficulty: ""
        });
    };

    onChange = name => event => {
        console.log('on change name: ', name)
        console.log('on change e: ', event.target.value)
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div>
                Where would you like to ride?
                <input
                    type='text'
                    placeholder='city, zipcode, etc.'
                    name='location'
                    onChange={e => this.onChange(e)}
                >
                </input>
                <select>
                    <option value='ciao'>ciao</option>
                    <option value='bob'>bob</option>
                </select>

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