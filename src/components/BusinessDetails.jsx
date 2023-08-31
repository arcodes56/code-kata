import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Paper, Box, Alert } from "@mui/material";
import UserForm from "./UserForm";
import { withRouter, Link } from "react-router-dom";

class BusinessDetails extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      showAlert: false,
    };
  }
  componentDidMount() {
    this.props.updateField("FIRST_NAME", "h");
  }
  render() {
    return (
      <>
        <AppBar
          position="absolute"
          color="default"
          elevation={3}
          sx={{
            position: "relative",
            borderBottom: (t) => `1px solid ${t.palette.divider}`,
          }}
        >
          <Toolbar>
            <Typography
              component={Link}
              to="/"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ textDecoration: "none" }}
            >
              Loan Application
            </Typography>
          </Toolbar>
        </AppBar>
        {this.state.showAlert && (
          <Alert severity="error">Please fill all required fields</Alert>
        )}
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            elevation={5}
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Details
            </Typography>
            <UserForm {...this.props} />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={this.handleClick}
              >
                Get balance sheet
              </Button>
            </Box>
          </Paper>
        </Container>
      </>
    );
  }
  async handleClick() {
    await this.props.validateForm();
    if (this.props.isValidForm) this.props.history.push("/review");
    else this.setState({ showAlert: true });
  }
}
export default withRouter(BusinessDetails);
