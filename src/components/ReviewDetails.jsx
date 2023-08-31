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
  constructor() {
    super();
    this.handleSend = this.handleSend.bind(this);
  }
  componentDidMount() {
    this.props.fetchBalanceSheet("xyz", "accountproviderhere", 10000);
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
        <Grid item xs={6}>
          <Container>
            <Paper
              elevation={5}
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <Typography component="h3" variant="h6" align="center">
                Review Details
              </Typography>
              <DetailsView userData={this.props.userData} />
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
              <BalanceSheetTableView rows={this.props.data} />
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
                  onClick={this.handleSend}
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
  async handleSend() {
    await this.props.sendApplication(
      this.props.userData,
      this.props.preAssesment,
      this.props.profitLossSummary
    );
    const decision = this.props.decision;
    this.props.history.push(`/outcome?decision=${decision}`);
  }
}
export default withRouter(ReviewDetails);
