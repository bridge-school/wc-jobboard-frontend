// NPM
import React, { Component } from 'react'
// import { navigate } from 'gatsby'
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
// import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';

// APP
// import { updateSearchParams } from 'appRedux/modules/speaker';

const styles = theme => ({
  // container: {
  //   display: 'flex',
  //   flexWrap: 'wrap',
  // },
  textField: {
    minWidth: '35em',
    // marginLeft: theme.spacing.unit,
    // marginRight: 30,
  },
  // dense: {
  //   marginTop: 16,
  // },
})

class SearchField extends Component {
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
        >
       </TextField>
      </form>
    )
  }
}

export default withStyles(styles)(SearchField);
