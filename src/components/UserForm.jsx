import React from "react";
import {
  Grid,
  TextField,
  FormHelperText,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import {
  ACCOUNT_PROVIDER,
  BUSINESS_ADDRESS,
  BUSINESS_NAME,
  COUNTRY,
  FIRST_NAME,
  LAST_NAME,
  LOAN_AMT,
  YEAR,
} from "../containers/UserForm/UserFormActionTypes";
import { withRouter } from "react-router-dom";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              error={this.props.firstNameError != null}
              required
              value={this.props.firstName ? this.props.firstName : ""}
              helperText={this.props.firstNameError}
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(FIRST_NAME, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error={this.props.lastNameError != null}
              helperText={this.props.lastNameError}
              value={this.props.lastName ? this.props.lastName : ""}
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(LAST_NAME, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              error={this.props.businessNameError != null}
              helperText={this.props.businessNameError}
              value={this.props.businessName ? this.props.businessName : ""}
              id="businessName"
              name="businessName"
              label="Name of Business"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(BUSINESS_NAME, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address"
              name="address"
              value={
                this.props.businessAddress ? this.props.businessAddress : ""
              }
              label="Complete Business Address"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(BUSINESS_ADDRESS, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error={this.props.yearError != null}
              helperText={this.props.yearError}
              value={this.props.year ? this.props.year : ""}
              id="year"
              name="year"
              label="Year of Establishment (YYYY)"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(YEAR, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              error={this.props.countryError != null}
              helperText={this.props.countryError}
              value={this.props.country ? this.props.country : ""}
              id="country"
              name="country"
              label="Country"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(COUNTRY, e.target.value);
              }}
            />
          </Grid>
          <Grid item xs={6} sm={6}>
            <FormControl variant="standard" fullWidth>
              <InputLabel>Account Provider *</InputLabel>
              <Select
                error={this.props.accProviderError != null}
                labelId="select-label"
                id="simple-select"
                label="Age"
                value={this.props.accProvider ? this.props.accProvider : ""}
                onChange={(e) => {
                  this.props.updateField(ACCOUNT_PROVIDER, e.target.value);
                }}
              >
                <MenuItem value={"Xero"}>Xero</MenuItem>
                <MenuItem value={"MYOB"}>MYOB</MenuItem>
              </Select>
              <FormHelperText>{this.props.accProviderError}</FormHelperText>
            </FormControl>
          </Grid>
          <Grid item xs={6} sm={6}>
            <TextField
              required
              type="number"
              id="loanAmt"
              error={this.props.loanAmtError != null}
              helperText={this.props.loanAmtError}
              value={this.props.loanAmt ? this.props.loanAmt : ""}
              name="loanAmt"
              label="Loan Amount"
              fullWidth
              variant="standard"
              onChange={(e) => {
                this.props.updateField(LOAN_AMT, e.target.value);
              }}
            />
          </Grid>
        </Grid>
      </>
    );
  }
}
export default withRouter(UserForm);
