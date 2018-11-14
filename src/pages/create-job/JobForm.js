// NPM
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { postFormObject } from '../../api/index';
import { renderTextField, renderCheckbox } from './renderFunctions';
import Card from '@material-ui/core/Card';
import FormGroup from '@material-ui/core/FormGroup';
import StyledButton from '../../components/common/StyledButton';
import FormField from '../../components/common/FormField';
import { Field, reduxForm } from 'redux-form';

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

const handleJobFormSubmit = (values) => {
  // this is where we push to firebase
  console.log(values)
  postFormObject(values);
}

const JobFormComponent = ({ handleSubmit, classes, reset}) => {
  
  return (
  <form onSubmit={handleSubmit(handleJobFormSubmit)}  className={classes.createJob}>
      <div>
        <h1 className={classes.jobHeader}>Post a job</h1>
        {/* JOB INFO CARD */}
        <Card elevation={0} className={classes.card}>
          <Field name="title" component={renderTextField} type="text" label="Job title" />
          <br/>
          <Field name="companyName" component={renderTextField} type="text" label="Company Name" />
          <br/>
          <Field name="city" component={renderTextField} type="text" label="City" />
          <br/>
          <Field name="link" component={renderTextField} type="text" label="Link for job post" />
          <br/>
        </Card>

        {/* EMPLOYEE BENEFITS CARD */}
        <Card elevation={0} className={classes.card}>
          <FormGroup aria-label="Bathrooms" name="bathrooms">
            <Field name="baby_change_table" component={renderCheckbox} type= "checkbox" label="Baby change table" />
            <Field name="gender_neutral" component={renderCheckbox} type= "checkbox" label="Gender neutral" />
            <Field name="single_stall" component={renderCheckbox} type= "checkbox" label="Single Stall" />
            <Field name="wheel_chair" component={renderCheckbox} type= "checkbox" label="Wheel Chair" />
          </FormGroup>

          <FormGroup aria-label="Days Off" name="daysOff">
            <Field name="health" component={renderCheckbox} type= "checkbox" label="Health" />
            <Field name="personal" component={renderCheckbox} type= "checkbox" label="Personal" />
            <Field name="professional_development" component={renderCheckbox} type= "checkbox" label="Professional development" />
          </FormGroup>

          <FormGroup aria-label="Employee Development" name="employee_development">
            <Field name="career_coaching" component={renderCheckbox} type= "checkbox" label="Career coaching" />
            <Field name="employee_resources" component={renderCheckbox} type= "checkbox" label="Employee resources" />
            <Field name="hackathons" component={renderCheckbox} type= "checkbox" label="Hackathons" />
            <Field name="lunch_and_learns" component={renderCheckbox} type= "checkbox" label="Lunch and learns" />
            <Field name="mentorship" component={renderCheckbox} type= "checkbox" label="Mentorship" />
            <Field name="development_budget" component={renderCheckbox} type= "checkbox" label="Development budget" />
            <Field name="tuition_reimbursement" component={renderCheckbox} type= "checkbox" label="Tuition reimbursement" />
          </FormGroup>

          <FormGroup aria-label="Employment" name="employment">
            <Field name="flexible_hours" component={renderCheckbox} type= "checkbox" label="Flexible hours" />
            <Field name="name_blind_hiring" component={renderCheckbox} type= "checkbox" label="Name blind hiring" />
            <Field name="personalized_workstation" component={renderCheckbox} type= "checkbox" label="Personalized workstation" />
            <Field name="full_transit" component={renderCheckbox} type= "checkbox" label="Full transit" />
            <Field name="subsidized_transit" component={renderCheckbox} type= "checkbox" label="Subsidized transit" />
            <Field name="relocation" component={renderCheckbox} type= "checkbox" label="Relocation" />
            <Field name="remote" component={renderCheckbox} type= "checkbox" label="Remote" />
            <Field name="work_from_home" component={renderCheckbox} type= "checkbox" label="Work from home" />
          </FormGroup>

          <FormGroup aria-label="Family" name="family">
            <Field name="on_site_children" component={renderCheckbox} type= "checkbox" label="On site children" />
            <Field name="subsidized_childcare" component={renderCheckbox} type= "checkbox" label="Subsidized childcare" />
            <Field name="parental_leave" component={renderCheckbox} type= "checkbox" label="Parental leave" />
          </FormGroup>

          <FormGroup aria-label="Finances" name="finances">
            <Field name="stock_plan" component={renderCheckbox} type= "checkbox" label="Stock plan" />
            <Field name="retirement_savings" component={renderCheckbox} type= "checkbox" label="Retirement savings" />
          </FormGroup>

          <FormGroup aria-label="health" name="health">
            <Field name="dental" component={renderCheckbox} type= "checkbox" label="dental" />
            <Field name="employee_assistance" component={renderCheckbox} type= "checkbox" label="Employee assistance" />
            <Field name="flexible_spending" component={renderCheckbox} type= "checkbox" label="Flexible spending" />
            <Field name="full_gym" component={renderCheckbox} type= "checkbox" label="Full gym" />
            <Field name="subsidized_gym" component={renderCheckbox} type= "checkbox" label="Subsidized gym" />
            <Field name="wellness_budget" component={renderCheckbox} type= "checkbox" label="Sellness budget" />
            <Field name="health" component={renderCheckbox} type= "checkbox" label="Health" />
            <Field name="vision" component={renderCheckbox} type= "checkbox" label="Vision" />
          </FormGroup>

          <FormGroup aria-label="insurance" name="insurance">
            <Field name="life" component={renderCheckbox} type= "checkbox" label="Life" />
            <Field name="disability" component={renderCheckbox} type= "checkbox" label="Disability" />
            <Field name="travel" component={renderCheckbox} type= "checkbox" label="Travel" />
          </FormGroup>
          <FormGroup aria-label="office" name="office">
            <Field name="snacks" component={renderCheckbox} type= "checkbox" label="Snacks" />
            <Field name="meditation" component={renderCheckbox} type= "checkbox" label="Meditation" />
            <Field name="prayer" component={renderCheckbox} type= "checkbox" label="Prayer" />
            <Field name="pumping" component={renderCheckbox} type= "checkbox" label="Pumping" />
            <Field name="stand_up_desks" component={renderCheckbox} type= "checkbox" label="Stand up desks" />
            <Field name="accessible" component={renderCheckbox} type= "checkbox" label="Accessible" />
          </FormGroup>
          <FormGroup aria-label="policy" name="Policy">
            <Field name="anti_harassment" component={renderCheckbox} type= "checkbox" label="Anti harassment" />
            <Field name="code_of_conduct" component={renderCheckbox} type= "checkbox" label="Code of conduct" />
            <Field name="parental_leave" component={renderCheckbox} type= "checkbox" label="Parental leave" />
          </FormGroup>
          <FormGroup aria-label="Social" name="Social">
            <Field name="daily_lunch" component={renderCheckbox} type= "checkbox" label="Daily lunch" />
            <Field name="weekly_lunch" component={renderCheckbox} type= "checkbox" label="Weekly lunch" />
            <Field name="monthly_outings" component={renderCheckbox} type= "checkbox" label="Monthly outings" />
            <Field name="quarterly_outings" component={renderCheckbox} type= "checkbox" label="Quarterly outings" />
          </FormGroup>
        </Card>

        {/* SUBMIT/CLEAR FORM CARD */}
        <Card elevation={0} className={classes.card}>
         <FormField className={classes.adjacentButtons}>
           <StyledButton label="Submit" type="submit" color="primary">
             Post a Job
         </StyledButton>
           <StyledButton label="Clear" type="button" color="secondary" onClick={reset}>
             Clear All
         </StyledButton>
         </FormField>
       </Card>
      </div>
    </form>
  );
};
const JobForm = reduxForm({
  form: 'jobs'
})(JobFormComponent)

export default withStyles(styles)(JobForm);