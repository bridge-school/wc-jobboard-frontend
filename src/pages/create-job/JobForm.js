// NPM
import React from 'react';
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

import css from '../../assets/onboarding.module.css';

const JobForm = props => {
  return (
    <div className={css.registrationForm}>
      <form onSubmit={props.handleSubmit}>
        <h1 className={css.registrationFormHeader}>Post a job</h1>
        <JobInfo/>
        <EmployeeBenefits/>

        <div>
          <FormField className={css.formControl}>
            <StyledButton label="Submit" type="submit" color="primary">
              Post a Job
            </StyledButton>
            <StyledButton label="Clear" type="submit" color="secondary">
              Clear All
            </StyledButton>
          </FormField>
        </div>

      </form>
    </div>
  );
};

export default JobForm;

