// NPM
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
// import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// App
import Logo from '../../assets/images/logo_women_and_color.svg';
import StyledButton from '../common/StyledButton';

const styles = theme => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.primary.contrastText,
    color: theme.palette.secondary.dark,
  }
});

class Navigation extends Component {

  render() {
    const {
      classes,
    } = this.props;

    return (
      <div>
        <AppBar position="fixed" className={classes.root}>
          <Toolbar>
            <Grid container justify="center" spacing={0}>
              <Grid item xs={12} md={9}>
                <Grid container justify="space-between" alignItems="center">
                  <Grid item xs={6} sm={4} md={3}>
                    <a
                      href="/"
                      style={{ textDecoration: 'none' }}
                    >
                      <img src={Logo} height="50px" width="100%" alt={'Women and Color logo'}/>
                    </a>
                  </Grid>
                   <Grid item xs={6} md={4}>
                    <Grid container justify="flex-end">
                    {/* Add Styled Button here - may need to bring in Button Menu*/}
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
};

// export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navigation));
export default withStyles(styles)(Navigation);
