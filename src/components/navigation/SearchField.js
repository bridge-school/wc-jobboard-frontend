// NPM
import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

// APP
import { search } from '../../api'

const styles = theme => ({
  textField: {
    minWidth: '35em',
  },
})




class SearchField extends Component {
  handleChange(event) {
    search(event.target.value).then((searchResult) => {
      console.log(searchResult)
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <form>
        <TextField
          id="outlined-search"
          label="🔍  Search by job title or company name"
          type="search"
          className={classes.textField}
          variant="outlined"
          onChange={this.handleChange}
        >
       </TextField>
      </form>
    )
  }
}

export default withStyles(styles)(SearchField);
