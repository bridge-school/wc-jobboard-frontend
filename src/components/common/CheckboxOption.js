import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';


const CheckboxOption = (props) => {
  return (
  	<div>
      {props.control}
      {props.label}
  	</div>
  )
};

export default CheckboxOption;


	 
	    // <FormControlLabel
	    //   value="false"
	    //   control={<Checkbox color="primary" />}
	    //   label="Gender neutral"
	    // />
	    // <FormControlLabel
	    //   value="false"
	    //   control={<Checkbox color="primary" />}
	    //   label="Single-stall"
	    // />
	    // <FormControlLabel
	    //   value="false"
	    //   control={<Checkbox color="primary" />}
	    //   label="Wheelchair accessible stalls"
	    // />