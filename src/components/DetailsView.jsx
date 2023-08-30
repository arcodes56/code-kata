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
              <h6>{data.firstName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Last Name</h5>
              <h6>{data.lastName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Business Name</h5>
              <h6>{data.businessName}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5>Year of Establishment</h5>
              <h6>{data.year}</h6>
            </Grid>
            <Grid item xs={3}>
              <h5> Business Address</h5>
              <h6>{data.address}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Country</h5>
              <h6>{data.country}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Account provider</h5>
              <h6>{data.accountProvider}</h6>
            </Grid>
            <Grid item xs={3} md={3}>
              <h5> Loan Amount </h5>
              <h6>{data.loanAmt}</h6>
            </Grid>
          </Grid>
        </Box>
      </>
    );
  }
}
export default DetailsView;
