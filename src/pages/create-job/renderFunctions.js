import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import FormControl from '@material-ui/core/FormControl';

export const renderTextField = ({ input, label,}) => (
    <FormControl fullWidth>
        <TextField
            {...input}
            label={label}
            InputLabelProps={{ required: false }}
            margin="dense"
            variant="outlined"
        />
    </FormControl>
  )

export const renderCheckbox = ({ input, label }) => (
    <FormControlLabel
        label={label}
        control={
        <Checkbox
        {...input}
            color="primary"
            label={label}
            checked={input.value ? true : false} 
            value=""
            // onCheck={input.onChange}
        />
        }
    />
)