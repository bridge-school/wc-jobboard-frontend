import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Add from '@material-ui/icons/Add';
import Divider from '@material-ui/core/Divider';
import '../../assets/styles.module.css';


const JobFilterList = (props) => {
  return (
    <div>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<Add />}>
          <Typography >{props.filterTitle}</Typography>
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


export default JobFilterList;