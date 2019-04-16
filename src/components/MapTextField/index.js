import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MapIcon from "@material-ui/icons/Map";
import SearchIcon from "@material-ui/icons/CalendarToday";
import DirectionsIcon from "@material-ui/icons/ArrowForward";
import { TextField, Button } from "@material-ui/core";

const styles = {
  root: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center"
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    backgroundColor: "#686588",
    marginLeft: 8
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4
  }
};

function CustomizedInputBase(props) {
  const { classes } = props;

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <MapIcon style={{ color: "#686588", marginRight: 8 }} />
      <Paper className={classes.root} elevation={1}>
        <TextField
          id="date"
          type="date"
          defaultValue="2017-05-24"
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          InputProps={{
            disableUnderline: true,
            endAdornment: <SearchIcon style={{ color: "#686588" }} />
          }}
        />
      </Paper>
      <Button
        color="primary"
        className={classes.iconButton}
        aria-label="Directions"
        variant="raised"
      >
        <DirectionsIcon style={{ color: "white" }} />
      </Button>
    </div>
  );
}

CustomizedInputBase.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CustomizedInputBase);
