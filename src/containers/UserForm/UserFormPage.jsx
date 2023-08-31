import { connect } from "react-redux";
import { updateField, validateForm } from "./UserFormActions";
import BusinessDetails from "../../components/BusinessDetails";

const mapStateToProps = (state) => {
  return {
    firstName: state.userFormFeature.firstName,
    firstNameError: state.userFormFeature.firstNameError,
    lastName: state.userFormFeature.lastName,
    lastNameError: state.userFormFeature.lastNameError,
    businessName: state.userFormFeature.businessName,
    businessNameError: state.userFormFeature.businessNameError,
    businessAddress: state.userFormFeature.businessAddress,
    year: state.userFormFeature.year,
    yearError: state.userFormFeature.yearError,
    country: state.userFormFeature.country,
    countryError: state.userFormFeature.countryError,
    accProvider: state.userFormFeature.accProvider,
    accProviderError: state.userFormFeature.accProviderError,
    loanAmt: state.userFormFeature.loanAmt,
    loanAmtError: state.userFormFeature.loanAmtError,
    isValidForm: state.userFormFeature.isValidForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateField: (type, value) => {
      dispatch(updateField(type, value));
    },
    validateForm: () => {
      dispatch(validateForm());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails);
