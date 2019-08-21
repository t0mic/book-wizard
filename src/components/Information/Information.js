import React, {Component, Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import ControlButtons from '../ControlButtons/ControlButtons';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

class Information extends Component {

  render () {
    // const inputLabel = React.useRef(null);
    const {step, nextStep, prevStep} = this.props;
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid>
            <TextField
              id="bookName"
              label="Book Name"
              // className={classes.textField}
              value=""
              type="text"
              name="subgenreName"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid>
            <TextField
              id="bookName"
              label="Book Name"
              // className={classes.textField}
              value=""
              type="text"
              name="subgenreName"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <FormControl variant="outlined">
            <InputLabel 
            // ref={inputLabel} 
            htmlFor="book-author">
              Age
            </InputLabel>
            <Select
              native
              input={
                <OutlinedInput 
                  name="age" 
                  // labelWidth={labelWidth} 
                  id="book-author" />
              }
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <Grid>
            <TextField
              id="isbn"
              label="ISBN"
              // className={classes.textField}
              value=""
              type="text"
              name="isbn"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <FormControl variant="outlined">
            <InputLabel 
            // ref={inputLabel} 
            htmlFor="book-publisher">
              Publisher
            </InputLabel>
            <Select
              native
              input={
                <OutlinedInput 
                  name="age" 
                  // labelWidth={labelWidth} 
                  id="book-publisher" />
              }
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="MM/dd/yyyy"
            margin="normal"
            id="date-picker-inline"
            label="Date picker inline"
            value={new Date()}
            // onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
          </MuiPickersUtilsProvider>
          <Grid>
            <TextField
              id="pagenum"
              label="Number of pages"
              // className={classes.textField}
              value=""
              type="text"
              name="pagenum"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <FormControl variant="outlined">
            <InputLabel 
            // ref={inputLabel} 
            htmlFor="format">
              Format
            </InputLabel>
            <Select
              native
              input={
                <OutlinedInput 
                  name="Format" 
                  // labelWidth={labelWidth} 
                  id="format" />
              }
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
          <Grid>
            <TextField
              id="edition"
              label="Edition"
              // className={classes.textField}
              value=""
              type="text"
              name="edition"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <FormControl variant="outlined">
            <InputLabel 
            // ref={inputLabel} 
            htmlFor="edition-language">
              Edition Language
            </InputLabel>
            <Select
              native
              input={
                <OutlinedInput 
                  name="Format" 
                  // labelWidth={labelWidth} 
                  id="edition-language" />
              }
            >
              <option value="" />
              <option value={10}>Ten</option>
              <option value={20}>Twenty</option>
              <option value={30}>Thirty</option>
            </Select>
          </FormControl>
        </Grid>
        <ControlButtons 
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          // disabled={!subgenreTitle}
        />
      </Fragment>
    );
  }
}
export default Information;