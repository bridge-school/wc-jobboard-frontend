import React from 'react';
import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
// import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import FormField from '../../components/common/FormField';
// import css from '../../assets/benefits.module.css';
import Divider from '@material-ui/core/Divider';
import '../../assets/styles.module.css';
// import CheckboxOption '../CheckboxOption';


// const styles = theme => ({
//   logoContainer: {
//     // borderRadius: '10%',
//     // overflow: 'hidden',
//     // display: 'flex',
//     // justifyContent: 'right'
//   },
// });


const JobFilters = (props) => {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{props.filterTitle}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.children}
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Divider />
    </div>
  );
}

JobFilters.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default JobFilters;

// export default JobFilters;CheckboxOption