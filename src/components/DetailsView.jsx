import React from "react";
import { Grid, Box } from "@mui/material";

class DetailsView extends React.Component {
  render() {
    const data = {
      firstName: "abs",
      lastName: "c",
      businessName: "xyz",
      accountProvider: "MYOB",
      year: "2001",
      address: "asfsdgrhfhfh dfhdfh dfh 24",
      country: "US",
      loanAmt: 1000000,
    };
    return (
      <>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={3} md={3}>
              <h5> First Name</h5>
              <h6>{this.props.userData.firstName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Last Name</h5>
              <h6>{this.props.userData.lastName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Business Name</h5>
              <h6>{this.props.userData.businessName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5>Year of Establishment</h5>
              <h6>{this.props.userData.year}</h6>
            </Grid>
            <Grid item xs={3}>
              <h5> Business Address</h5>
              <h6>
                {this.props.userData.businessAddress
                  ? this.props.userData.businessAddress
                  : "-"}
              </h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Country</h5>
              <h6>{this.props.userData.country}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Account provider</h5>
              <h6>{this.props.userData.accProvider}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Loan Amount </h5>
              <h6>{this.props.userData.loanAmt}</h6>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default DetailsView;
