// NPM
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

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

export default Header;