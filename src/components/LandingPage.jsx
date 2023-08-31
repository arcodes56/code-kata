import React from "react";
import {
  Grid,
  Typography,
  Box,
  AppBar,
  Toolbar,
  Button,
  Link,
} from "@mui/material";
import { ReactComponent as Logo } from "../assets/landing-img.svg";
import { withRouter, Link as LinkRouter } from "react-router-dom";
import { APPLICATION_NAME } from "../constants";

class LandingPage extends React.Component {
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
              component={LinkRouter}
              to="/"
              sx={{ textDecoration: "none" }}
              variant="h6"
              color="inherit"
              noWrap
            >
              {APPLICATION_NAME}
            </Typography>
          </Toolbar>
        </AppBar>
        <Box sx={{ flexGrow: 1, padding: "100px" }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6}>
              <Logo height="300" />
            </Grid>
            <Grid item xs={12} sm={6}>
              <p>
                Unlock Your Business Potential with Our Hassle-Free Loan
                Application. Secure the funds you need to grow and thrive.
                Streamlined process, competitive rates, and personalized
                solutions. Get started today and take your business to new
                heights.
              </p>
              <Button
                variant="contained"
                color="grey"
                sx={{ mt: 3, ml: 1 }}
                onClick={() => this.props.history.push("/details")}
              >
                Start Application
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Take home project for Demyst by "}
          <Link
            color="inherit"
            href="https://linkedin.com/in/swethagnanam"
            target="_blank"
          >
            Swetha G
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </>
    );
  }
}
export default withRouter(LandingPage);
