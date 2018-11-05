// NPM
import React from 'react';
// import { connect } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import ReactLoading from 'react-loading';

// App
// import StyledButton from '../../components/common/StyledButton';
import FormField from '../../components/common/FormField';
// import ImageUpload from 'appCommon/ImageUpload';
// import DefaultLayout from '../../components/layouts/Default';

import css from '../../assets/benefits.module.css';

const EmployeeBenefits = (props) => {
    return (
        <div>
        <h2>Employee Benefits</h2>

        <FormField>
          <FormLabel component="legend" className={css.hightlight}>
            Bathrooms
          </FormLabel>
          <FormGroup
            aria-label=""
            name="Bathrooms"
          >
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Baby change table"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Gender neutral"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Single-stall"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Wheelchair accessible stalls"
            />
          </FormGroup>
        </FormField>

        <FormField fullWidth className={css.hightlight}>
          <FormLabel component="legend" >
            Days Off
          </FormLabel>
          <FormGroup
            aria-label=""
            name="Days Off"
          >
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Health"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Personal"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Professional development"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Religious holidays"
            />
          </FormGroup>
        </FormField>

        <FormField fullWidth className={css.hightlight}>
          <FormLabel component="legend">
            Employee development
          </FormLabel>
          <FormGroup
            aria-label=""
            name="Employee development"
          >
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Career coaching"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Employee resource groups"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Internal hackathons"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Lunch and learns"
            />
            {/* <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Mentorship program"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Performance review (annual)"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Performance review (semi-annual)"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Professional development budget"
            />
            <FormControlLabel
              value="false"
              control={<Checkbox color="primary" />}
              label="Tuition reimbursement"
            /> */}
          </FormGroup>
        </FormField>
        </div>

    )
}


export default EmployeeBenefits;
