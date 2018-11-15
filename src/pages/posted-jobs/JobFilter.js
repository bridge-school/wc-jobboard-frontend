import React from 'react';
import CheckboxOption from "../../components/common/CheckboxOption";
import Checkbox from '@material-ui/core/Checkbox';

const JobFilter = (props) => {
	return (
		<CheckboxOption
		  control={<Checkbox color="primary" />}
		  label={props.label}
		  >
		</CheckboxOption>
	)
}

export default JobFilter;