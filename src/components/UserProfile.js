import React, { Component } from 'react';

class UserProfile extends Component {

    state = {
        username: 'carne asada fries with pork',
        firstname: '',
        lastname: '',
        address: '',
        city: '',
        state: '',
        zipcode: '',
        email: '',
        phonenum: '',
        radius: null,
        rideType: null,
        difficulty: null,
    };

    componentDidMount = () => {
        // console.log("profile component mount");
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    handleCheckboxChange = name => (event, checked) => {
        this.setState({ [name]: checked });
    };

    submitChange = event => {
        console.log('in signup submitchange')
        event.preventDefault();
    };

    submitFormHandler = event => {
        console.log('in submitFormHandler')
        event.preventDefault();
        console.dir(this)
        console.log(this.refs.name.value); //will give us the name value
      }

    render() {
        return (
            <div className="rm-profile-layout-container">
                <div className="rm-profile-name-container">
                    Profile - {this.state.username}
                    <form onSubmit={this.submitFormHandler}>
                        <div><label>First Name</label></div>
                        <div>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                ref="name"
                                label="First Name"
                                value={this.state.firstname}
                                placeholder="First Name"
                                margin="normal"
                                onChange={this.handleChange}
                            />
                        </div>
                    </form>

                </div>

            </div>
        );
    }
}
// <button raised color="primary"
// onClick={this.submitChange}
// >Save
// </button>
export default UserProfile;

//  <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="lastname"
//                                 name="lastname"
//                                 label="Last Name"
//                                 className={classes.textField}
//                                 value={this.state.lastname}
//                                 onChange={this.handleChange('lastname')}
//                                 placeholder="Last Name"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                 </div>
//                     <div className="rm-profile-address-container">
//                         <FormControl className={classes.formControl}>
//                             <TextField
//                                 id="address"
//                                 name="address"
//                                 label="Address"
//                                 className={classes.textField}
//                                 value={this.state.address}
//                                 onChange={this.handleChange('address')}
//                                 placeholder="Address"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                         <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="city"
//                                 name="city"
//                                 label="City"
//                                 className={classes.textField}
//                                 value={this.state.city}
//                                 onChange={this.handleChange('city')}
//                                 placeholder="City"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                         <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="state"
//                                 name="state"
//                                 label="State"
//                                 className={classes.textField}
//                                 value={this.state.state}
//                                 onChange={this.handleChange('state')}
//                                 placeholder="State"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                         <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="zipcode"
//                                 name="zipcode"
//                                 label="Zipcode"
//                                 className={classes.textField}
//                                 value={this.state.zipcode}
//                                 onChange={this.handleChange('zipcode')}
//                                 placeholder="Zipcode"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                         <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="email"
//                                 name="email"
//                                 label="Email"
//                                 className={classes.textField}
//                                 value={this.state.email}
//                                 onChange={this.handleChange('email')}
//                                 placeholder="Email"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                         <FormControl className={classes.formControl}>
//                             <TextField

//                                 id="phonenum"
//                                 name="phonenum"
//                                 label="Phone Number"
//                                 className={classes.textField}
//                                 value={this.state.phonenum}
//                                 onChange={this.handleChange('phonenum')}
//                                 placeholder="Phone Number"

//                                 margin="normal"
//                             />
//                         </FormControl>
//                     </div>
//                     <br /><br /><br />
//                     <Typography type="display1" color="inherit" >
//                         Biking Preferences
//            </Typography>
//                     <FormControl className={classes.formControl}>
//                         <TextField

//                             id="radius"
//                             name="radius"
//                             label="Riding Area Radius (miles)"
//                             className={classes.textField}
//                             value={this.state.radius}
//                             onChange={this.handleChange('radius')}
//                             placeholder="Radius of riding area"

//                             margin="normal"
//                         />
//                     </FormControl><br /><br /><br />
//                     <div className="rm-profile-biking-settings">
//                         <FormGroup>
//                             Type

//             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.rideTypeRoad}
//                                         onChange={this.handleCheckboxChange('rideTypeRoad')}
//                                         value="road"
//                                     />
//                                 }
//                                 label="Road Biking"
//                             />
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.rideTypeMountain}
//                                         onChange={this.handleCheckboxChange('rideTypeMountain')}
//                                         value="mountain"
//                                     />
//                                 }
//                                 label="Mountain Biking"
//                             />
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.rideTypeOther}
//                                         onChange={this.handleCheckboxChange('rideTypeOther')}
//                                         value="hybrid"
//                                     />
//                                 }
//                                 label="Hybrid Biking"
//                             />


//                         </FormGroup><br /> &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;
//           <FormGroup>
//                             Difficulty

//             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.difficultyEasy}
//                                         onChange={this.handleCheckboxChange('difficultyEasy')}
//                                         value="easy"
//                                     />
//                                 }
//                                 label="Easy (15-25 miles)"
//                             />
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.difficultyIntermediate}
//                                         onChange={this.handleCheckboxChange('difficultyIntermediate')}
//                                         value="intermediate"
//                                     />
//                                 }
//                                 label="Intermediate (25-45 miles)"
//                             />
//                             <FormControlLabel
//                                 control={
//                                     <Checkbox
//                                         checked={this.state.difficultyHard}
//                                         onChange={this.handleCheckboxChange('difficultyHard')}
//                                         value="hard"
//                                     />
//                                 }
//                                 label="Hard (Above 50 miles)"
//                             />


//                         </FormGroup>