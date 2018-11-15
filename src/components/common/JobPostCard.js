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

const JobPostCard = ( { classes, primary, secondary, logo, link, key } ) => {
  return (
    <List key={key}>
      <a href={link} target="_blank">
        <ListItem>
          <div className={classes.logoContainer}>
            <img className={classes.logo} src={logo} alt=""/>
          </div>
          <ListItemText primary={primary} secondary={secondary} />
        </ListItem>
      </a>
    </List>
      
  )
}

export default withStyles(styles)(JobPostCard)
