import React from "react";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import MapTextField from "../MapTextField";
import { withWidth } from "@material-ui/core";

const SearchMap = props => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: props.width === "xs" ? "center" : "space-between",
        paddingTop: 32,
        flexDirection: props.width === "xs" ? "column" : "row",
        alignItems: "center"
      }}
    >
      <div>
        <MapTextField />
      </div>
      <Fab
        color="primary"
        aria-label="Add"
        size="small"
        style={{ backgroundColor: "green" }}
      >
        <AddIcon />
      </Fab>
    </div>
  );
};

export default withWidth()(SearchMap);
