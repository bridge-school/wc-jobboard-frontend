// NPM
import React from 'react';
// import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
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
// import ImageUpload from 'appCommon/ImageUpload';
// import DefaultLayout from '../../components/layouts/Default';

import css from '../../assets/onboarding.module.css';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    // ...enter style classes here
});

const JobInfo = () => {
    return (
        <div>
            <h2>Job Info</h2>
            <FormField>
            {/* <ImageUpload /> */}
            <StyledButton label="Clear" type="submit" color="secondary">
                Select logo
            </StyledButton>
            </FormField>
            <FormField>
            <TextField
                required
                label="Job title"
                InputLabelProps={{ required: false }}
                margin="dense"
                variant="outlined"
            />
            </FormField>

            <FormField>
            <TextField
                required
                label="Company name"
                InputLabelProps={{ required: false }}
                margin="dense"
                variant="outlined"
            />
            </FormField>

            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="City"
                InputLabelProps={{ required: false }}
                margin="dense"
                variant="outlined"
            />
            </FormField>
            <FormField fullWidth className={css.formControl}>
            <TextField
                required
                label="Link for job post"
                InputLabelProps={{ required: false }}
                margin="dense"
                variant="outlined"
            />
            </FormField>
        </div>
    )
}

export default withStyles(styles)(JobInfo);