// NPM
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import { connect } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
// import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import ReactLoading from 'react-loading';

// App
import StyledButton from '../../components/common/StyledButton';
import FormField from '../../components/common/FormField';
import EmployeeBenefits from './EmployeeBenefits';
import JobInfo from './JobInfo';

// import ImageUpload from 'appCommon/ImageUpload';
// import DefaultLayout from '../../components/layouts/Default';
// import css from '../../assets/onboarding.module.css';

const styles = theme => ({
  createJob: {
    background: '#EFEEEA',
    paddingTop: '100px'
  },
  card: {
    borderRadius: '8px',
    border: `1px solid #e0e0e0`,
    margin: '25px auto',
    padding: '25px',
    maxWidth: '1000px'

  },
  jobHeader: {
    maxWidth: '1000px',
    margin: 'auto',

  },
  adjacentButtons: {
    display: 'block'
  }
})

const JobForm = ({ handleSubmit, classes}) => {
  return (
    <form onSubmit={handleSubmit} className={classes.createJob}>
        <h1 className={classes.jobHeader}>Post a job</h1>
        <Card elevation={0} className={classes.card}>
          <JobInfo />
        </Card>
        
        <Card elevation={0} className={classes.card}>
          <EmployeeBenefits />
        </Card>

        <Card elevation={0} className={classes.card}>
          <FormField className={classes.adjacentButtons}>
            <StyledButton label="Submit" type="submit" color="primary">
              Post a Job
          </StyledButton>
            <StyledButton label="Clear" type="submit" color="secondary">
              Clear All
          </StyledButton>
          </FormField>
        </Card>
      </form>
  );
};

export default withStyles(styles)(JobForm);
