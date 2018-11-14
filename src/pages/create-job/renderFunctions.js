import React from 'react';
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export const renderTextField = ({ input, label,}) => (
    <TextField
        {...input}
        label={label}
        InputLabelProps={{ required: false }}
        margin="dense"
        variant="outlined"
    />
  )

export  const renderCheckbox = ({ input, label }) => (
    <FormControlLabel

        label={label}
        control={
        <Checkbox
        {...input}
            color="primary"
            label={label}
            checked={input.value ? true : false} 
            onCheck={input.onChange}
        />
        }
    />
)