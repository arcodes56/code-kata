import React from "react";
import { withRouter, Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Paper,
  Container,
  Grid,
  Box,
  Button,
} from "@mui/material";
import BalanceSheetTableView from "./BalanceSheetTableView";
import DetailsView from "./DetailsView";

class ReviewDetails extends React.Component {
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
        <Grid item xs={6}>
          <Container>
            <Paper
              elevation={5}
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h3" variant="h6" align="center">
                Review Details
              </Typography>
              <DetailsView />
            </Paper>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Paper
              elevation={5}
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h3" variant="h6" align="center">
                Balance Sheet
              </Typography>
              <BalanceSheetTableView />
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={() => this.props.history.push("/details")}
                >
                  Back
                </Button>
                <Button
                  variant="contained"
                  sx={{ mt: 3, ml: 1 }}
                  onClick={() => this.props.history.push("/outcome")}
                >
                  Send Application
                </Button>
              </Box>
            </Paper>
          </Container>
        </Grid>
      </>
    );
  }
}
export default withRouter(ReviewDetails);
