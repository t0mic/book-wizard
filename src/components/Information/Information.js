import React, { Component, Fragment } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import ControlButtons from "../ControlButtons/ControlButtons";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker
} from "@material-ui/pickers";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import draftToMarkdown from "draftjs-to-markdown";
import {
  bookLanguages,
  bookFormats,
  bookPublishers,
  bookAuthors
} from "../../Store/genres";
import styles from "./Information.css";

class Information extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      editorState: EditorState.createEmpty()
    };
  }

  handleInput = e => {
    this.props.handleInputChange({ name: e.target.name, val: e.target.value });
  };

  render() {
    const {
      step,
      nextStep,
      prevStep,
      informationForm: {
        bookTitle,
        author,
        isbn,
        publisher,
        publishDate,
        pagenum,
        format,
        edition,
        editionLagnuage,
        description
      },
      pageWidth,
      handleDescriptionText,
      handleDateChange,
      showDesc
    } = this.props;
    const disable =
      bookTitle &&
      author &&
      isbn &&
      publisher &&
      pagenum &&
      format &&
      edition &&
      editionLagnuage;
    const hasDesc =
      draftToMarkdown(convertToRaw(description.getCurrentContent())).length > 1;
    const disabled = showDesc ? !(disable && hasDesc) : !disable;
    return (
      <Fragment>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <TextField
              onChange={this.handleInput}
              id="bookName"
              label="Book Title"
              value={bookTitle}
              type="text"
              name="bookTitle"
              margin="normal"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="book-author">Author</InputLabel>
              <Select
                value={author}
                onChange={this.handleInput}
                native
                input={
                  <OutlinedInput
                    name="author"
                    labelWidth={50}
                    id="book-author"
                  />
                }
              >
                <option value="" />
                {bookAuthors.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              fullWidth
              onChange={this.handleInput}
              id="isbn"
              label="ISBN"
              value={isbn}
              type="text"
              name="isbn"
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="book-publisher">Publisher</InputLabel>
              <Select
                value={publisher}
                onChange={this.handleInput}
                native
                input={
                  <OutlinedInput
                    name="publisher"
                    labelWidth={70}
                    id="book-publisher"
                  />
                }
              >
                <option value="" />
                {bookPublishers.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12} xs={12}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date published"
                value={publishDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date"
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Grid item md={12} xs={12}>
            <TextField
              id="pagenum"
              label="Number of pages"
              onChange={this.handleInput}
              value={pagenum}
              type="number"
              name="pagenum"
              margin="normal"
              variant="outlined"
              style={{ minWidth: 180 }}
            />
          </Grid>
          <Grid item md={12} xs={12}>
            <FormControl
              style={{
                minWidth: 240,
                width: pageWidth <= 768 ? "100%" : "auto"
              }}
              variant="outlined"
            >
              <InputLabel htmlFor="format">Format</InputLabel>
              <Select
                value={format}
                onChange={this.handleInput}
                fullWidth
                native
                input={
                  <OutlinedInput name="format" labelWidth={50} id="format" />
                }
              >
                <option value="" />
                {bookFormats.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item md={12}>
            <TextField
              style={{
                minWidth: 240,
                marginRight: 30,
                width: pageWidth <= 768 ? "100%" : "auto"
              }}
              onChange={this.handleInput}
              id="edition"
              label="Edition"
              value={edition}
              type="text"
              name="edition"
              margin="normal"
              variant="outlined"
            />
            <FormControl
              margin="normal"
              variant="outlined"
              style={{
                minWidth: 240,
                width: pageWidth <= 768 ? "100%" : "auto"
              }}
            >
              <InputLabel htmlFor="edition-language">
                Edition Language
              </InputLabel>
              <Select
                value={editionLagnuage}
                onChange={this.handleInput}
                native
                input={
                  <OutlinedInput
                    name="editionLagnuage"
                    labelWidth={125}
                    id="edition-language"
                  />
                }
              >
                <option value="" />
                {bookLanguages.map(b => (
                  <option key={b} value={b}>
                    {b}
                  </option>
                ))}
              </Select>
            </FormControl>
          </Grid>
          {showDesc && (
            <Grid item md={12}>
              <p className={styles.paragraph}>Description</p>
              <Editor
                editorClassName={styles.editorMain}
                onEditorStateChange={handleDescriptionText}
                defaultEditorState={description}
                toolbar={{
                  options: ["inline", "fontSize", "textAlign", "link"],
                  inline: { inDropdown: true },
                  textAlign: { inDropdown: true },
                  link: { inDropdown: true }
                }}
              />
            </Grid>
          )}
        </Grid>
        <ControlButtons
          step={step}
          nextStep={nextStep}
          prevStep={prevStep}
          disabled={disabled}
        />
      </Fragment>
    );
  }
}
export default Information;
