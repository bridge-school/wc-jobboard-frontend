// NPM
import React from 'react';
// import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
// import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
// import MenuItem from '@material-ui/core/MenuItem';
// import Checkbox from '@material-ui/core/Checkbox';
// import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import ReactLoading from 'react-loading';

// App
import StyledButton from '../../components/common/StyledButton';
import FormField from '../../components/common/FormField';
// import ImageUpload from 'appCommon/ImageUpload';
// import DefaultLayout from '../../components/layouts/Default';

import css from '../../assets/onboarding.module.css';

const JobInfo = () => {
    return (
        <div>
            <h2 className={css.registrationFormHeader}>Job Info</h2>
            <FormField className={css.formControl}>
            <FormLabel component="legend">Upload your photo</FormLabel>
            {/* <ImageUpload /> */}
            <StyledButton label="Clear" type="submit" color="secondary">
                Select logo
                </StyledButton>
            </FormField>
            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="Job Title"
                InputLabelProps={{ required: false }}
            />
            </FormField>

            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="Company Name"
                InputLabelProps={{ required: false }}
            />
            </FormField>

            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="City"
                InputLabelProps={{ required: false }}
            />
            </FormField>
            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="Link for job post"
                InputLabelProps={{ required: false }}
            />
            </FormField>
        </div>
    )
}

export default JobInfo;