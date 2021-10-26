import React, {
  useState,
  useEffect,
  useContext
} from "react";
import { Link } from "react-router-dom";
import {
  Button,
  FormGroup,
  FormControlLabel,
  Checkbox
} from "@material-ui/core";

function Form(props) {
  const handleChange = event => {
    props.setChecked({
      ...props.checked,
      [event.target.name]: event.target.checked
    });
  };

  return (
    <>
      <div className="checkbox">
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                name="buttonA"
                checked={props.checked.buttonA}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button A"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonB"
                checked={props.checked.buttonB}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button B"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonC"
                checked={props.checked.buttonC}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button C"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="buttonD"
                checked={props.checked.buttonD}
                onChange={handleChange}
                inputProps={{
                  "aria-label": "primary checkbox"
                }}
              />
            }
            label="Button D"
          />
        </FormGroup>
        <Link to="/results">
          <Button
            type="submit"
            variant="contained"
            color="secondary"
          >
            Submit
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Form;
