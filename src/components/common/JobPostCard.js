import React from 'react'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import { withStyles } from '@material-ui/core/styles'


// App
// import css from '../assets/css/speakers.module.css';
// import { profilePhoto } from 'appAssets/css/styles.module.css'
// import { pronounDict } from 'appHelpers/constants'
// import { ensureAbsoluteUrl } from 'appHelpers/url'
// import Topics from './Topics'

const styles = theme => ({
  logoContainer: {
    borderRadius: '10%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '40px',
    maxHeight: '40px',
  },
  logo: {
    width:'100%',
    height: 'auto',
  }
})

const JobPostCard = ( { classes } ) => {
  return (
    <List>
      <ListItem>
        <div className={classes.logoContainer}>
          <img className={classes.logo} src="https://6fszjoe6bk-flywheel.netdna-ssl.com/wp-content/uploads/2015/05/1405612741-airbnb-why-new-logo.jpg" alt=""/>
        </div>
        <ListItemText primary="Company" secondary="Position" />
      </ListItem>
    </List>
      
  )
}

export default withStyles(styles)(JobPostCard)
