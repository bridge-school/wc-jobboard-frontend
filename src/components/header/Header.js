// NPM
import React, { Component } from 'react';
// import { navigate } from 'gatsby';
// import SearchIcon from '@material-ui/icons/Search';
// import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
// import Hidden from '@material-ui/core/Hidden';
// import { connect } from 'react-redux';

// APP
// import StyledButton from '../common/StyledButton';
// import { updateSearchParams } from 'appRedux/modules/speaker';
// import { searchForm } from 'appAssets/css/styles.module.css';
// import '../../assets/header.module.css';

const styles = theme => ({
})


class Header extends Component {
  render() {
    return (
      <Grid container justify="center" spacing={0}>
        <Grid item xs={10} md={8}>
          <h2 className="headline">
            Find an inclusive workplace<br/>where you belong
          </h2>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Header);