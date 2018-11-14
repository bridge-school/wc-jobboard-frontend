import React, {Component} from 'react';
import Navigation from '../../components/navigation/Navigation';

import DropDown from "../../components/navigation/DropDown";
import SearchField from "../../components/navigation/SearchField";
import '../../assets/header.module.css';
import Header from '../../components/header/Header';
import ListedJobs from "../../components/common/ListedJobs";
import JobFilters from "../../components/common/JobFilters";
import CheckboxOption from "../../components/common/CheckboxOption";
import {checkApiServer} from '../../api/index';
import Checkbox from '@material-ui/core/Checkbox';


class MainPage extends Component {
  componentDidMount(){
    checkApiServer()
  }
  render() {
    const {path, color, title} = this.props
    return (
    <div className="banner">
      <div>
        <Navigation path={path} color={color} title={title}></Navigation>
      </div>
      <div>
        <Header />
      </div>
      <div className="searchForm">
        <SearchField />
        <DropDown />
      </div>
      <div className="postedJobs">
      <div className="listedJobs">
      <ListedJobs />
      </div>
      <div className="jobFilter">
      <JobFilters filterTitle="Bathroom">
        <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Baby change table"
                >
        </CheckboxOption>
        <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Gender neutral"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Single stall"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Wheelchair accesible stalls"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Days off">
        <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Health"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Personal"
                >
        </CheckboxOption>
                <CheckboxOption
                // value="false"
                control={<Checkbox color="primary" />}
                label="Professional development"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Employee development">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Career coaching"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Employee resources"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Hackathons"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Lunch and learns"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Mentorship"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Development budget"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Tuition reimbursement"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Employment">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Flexible hours"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Name blind hiring"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Personalized workstation"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Full transit"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Subsidized transit"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Relocation"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Remote"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Work from home"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Family">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="On site children"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Subsidized childcare"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Parental leave"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Finances">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Stock plan"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Retirement savings"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Health">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Dental"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Employee assistance"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Flexible spending"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Full gym"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Subsidized gym"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Sellness budget"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Health"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Vision"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Life">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Life"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Disability"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Travel"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Office">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Snacks"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Meditation"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Prayer"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Pumping"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Stand up desks"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Accesible"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Policy">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Anti harassment"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Code of conduct"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Parental leave"
                >
        </CheckboxOption>
      </JobFilters>
      <JobFilters filterTitle="Social">
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Daily lunch"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Weekly lunch"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Monthly outings"
                >
        </CheckboxOption>
        <CheckboxOption
                control={<Checkbox color="primary" />}
                label="Quarterly outings"
                >
        </CheckboxOption>
      </JobFilters>
      </div>
      </div>
    </div>
  )
  }
}

// const MainPageContainer = connect(
//   null, // state
//   mapDispatchToProps, //dispatch action - this is where we pass the thunk
// )(MainPage)

export default MainPage;