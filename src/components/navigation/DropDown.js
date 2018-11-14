// NPM
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';


const styles = theme => ({
  // root: {
  //   // display: 'flex',
  //   // flexWrap: 'wrap',
  //   order: 2,
  // },
  formControl: {
    margin: theme.spacing.unit *2.5,
    minWidth: '12em',
  },
  // selectEmpty: {
  //   marginTop: theme.spacing.unit * 2,
  //   width: theme.spacing.unit * 20,
  // },
});


class DropDown extends Component {
  handleChange(event) {
    console.log(event)
    this.setState({city: event.target.value})
  }
  render() {
  	const { classes } = this.props;
    return (
      <div>
        <form >
          <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel
            // ref={ref => {
            //   this.InputLabelRef = ref;
            // }}
            // htmlFor="outlined-age-simple"
          >
            All cities
          </InputLabel>
          <Select
            // value={this.state.age}
            onChange={this.handleChange}
            input={
              <OutlinedInput
                // labelWidth={this.state.labelWidth}
                // name="age"
                // id="outlined-age-simple"
              />
            }
          >
            <MenuItem value={0}>
              <em>None</em>
            </MenuItem>
            <MenuItem value={1}>Toronto</MenuItem>
            <MenuItem value={2}>Montreal</MenuItem>
            <MenuItem value={3}>Vancouver</MenuItem>
          </Select>
        </FormControl>
        </form>
      </div>
    )
  }
}
export default withStyles(styles)(DropDown);
