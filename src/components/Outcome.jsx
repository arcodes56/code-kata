import React from "react";
import { AppBar, Toolbar, Typography, Box, Grid, Button } from "@mui/material";
import { ReactComponent as Pending } from "../assets/loan_wait.svg";
import { ReactComponent as Success } from "../assets/loan_success.svg";
import { withRouter, Link } from "react-router-dom";
class Outcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      outcome: "",
    };
  }
  componentDidMount() {
    const url_string = window.location.href;
    var url = new URL(url_string);
    const decision = url.searchParams.get("decision");
    this.setState({ outcome: decision });
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
              sx={{ textDecoration: "none" }}
              variant="h6"
              color="inherit"
              noWrap
            >
              Loan Application
            </Typography>
          </Toolbar>
        </AppBar>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={6}>
            <Box padding={2}>
              {this.state.outcome === "pending" && (
                <>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Pending height="250" />
                  </Box>
                  <br />
                  <br />
                  <p>
                    Sit back and relax! Your business loan application is in the
                    pipeline. Our team is working hard behind the scenes to give
                    you a thumbs-up. Hang tight, and get ready to power up your
                    business dreams! You'll be hearing from us soon.
                  </p>
                </>
              )}
              {this.state.outcome === "success" && (
                <>
                  <Box sx={{ display: "flex", justifyContent: "center" }}>
                    <Success height="250" />
                  </Box>
                  <br />
                  <br />
                  <p>
                    Boom! Your business loan approval just landed! Congrats on
                    leveling up your business game. Our team is thrilled to
                    support your growth journey. We'll be in touch with all the
                    exciting details soon. Get ready to rock those business
                    goals!
                  </p>
                </>
              )}
              <br />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  color="grey"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={() => this.props.history.push("/")}
                >
                  Home
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withRouter(Outcome);
