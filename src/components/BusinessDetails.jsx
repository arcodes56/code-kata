import React from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { Button, Container, Paper, Box } from "@mui/material";
import UserForm from "./UserForm";
import { withRouter } from "react-router-dom";

class BusinessDetails extends React.Component {
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
            <Typography variant="h6" color="inherit" noWrap>
              Loan Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
          <Paper
            elevation={5}
            sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
          >
            <Typography component="h1" variant="h4" align="center">
              Details
            </Typography>
            <UserForm />
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="contained"
                sx={{ mt: 3, ml: 1 }}
                onClick={() => this.props.history.push("/review")}
              >
                Get balance sheet
              </Button>
            </Box>
          </Paper>
        </Container>
      </>
    );
  }
}
export default withRouter(BusinessDetails);
