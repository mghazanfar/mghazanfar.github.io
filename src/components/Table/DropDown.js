import React from "react";
import Menu from "@material-ui/core/Menu";
import CloseIcon from "@material-ui/icons/Close";
import SwapIcon from "@material-ui/icons/SwapCalls";
import MenuItem from "@material-ui/core/MenuItem";
import { Divider, Dialog, IconButton } from "@material-ui/core";

const vehicles = [
  { name: "Toyota" },
  { name: "Civic" },
  { name: "Corola" },
  { name: "Suzuki" },
  { name: "Prius" },
  { name: "BMW" },
  { name: "Hundai" },
  { name: "City" },
  { name: "Honda" }
];

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
    modal: false
  };

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null, modal: true });
  };

  handleCloseModal = () => {
    this.setState({ modal: false });
  };

  render() {
    const { anchorEl, modal } = this.state;
    const { label } = this.props;

    return (
      <div>
        <Dialog
          onClose={this.handleCloseModal}
          aria-labelledby="customized-dialog-title"
          open={modal}
          fullWidth
          maxWidth="sm"
        >
          <div
            id="customized-dialog-title"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 24px"
            }}
          >
            <div>Modal title</div>
            <IconButton onClick={this.handleCloseModal}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div
            style={{
              margin: "0px 24px",
              backgroundColor: "#cfcfcf",
              minHeight: 400,
              padding: 10,
              overflowY: "auto"
            }}
          >
            <div style={{ margin: "8px 0px" }}>Change Vehicle</div>
            {vehicles.map(vehicle => (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: 8
                }}
              >
                <div style={{ fontSize: 12 }}>{vehicle.name}</div>
                <IconButton
                  style={{ backgroundColor: "rgb(59, 55, 101)" }}
                  onClick={this.handleCloseModal}
                >
                  <SwapIcon style={{ color: "white" }} />
                </IconButton>
              </div>
            ))}
          </div>
        </Dialog>
        <div
          aria-owns={anchorEl ? "simple-menu" : undefined}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          {label}
        </div>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem onClick={this.handleClose}>Change</MenuItem>
          <Divider />
          <MenuItem>Swap</MenuItem>
        </Menu>
      </div>
    );
  }
}

export default SimpleMenu;
