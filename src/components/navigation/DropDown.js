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
            // onChange={this.handleChange}
            input={
              <OutlinedInput
                // labelWidth={this.state.labelWidth}
                // name="age"
                // id="outlined-age-simple"
              />
            }
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem>Toronto</MenuItem>
            <MenuItem>Montreal</MenuItem>
            <MenuItem>Vancouver</MenuItem>
          </Select>
        </FormControl>
        </form>
      </div>
    )
  }
}
export default withStyles(styles)(DropDown);
