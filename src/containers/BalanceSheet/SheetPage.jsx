import { connect } from "react-redux";
import { fetchBalanceSheet, sendApplication } from "./SheetActions";
import ReviewDetails from "../../components/ReviewDetails";

const mapStateToProps = (state) => {
  return {
    data: state.sheetFeature.data,
    preAssesment: state.sheetFeature.preAssesment,
    decision: state.sheetFeature.decision,
    profitLossSummary: state.sheetFeature.profitLossSummary,
    userData: {
      firstName: state.userFormFeature.firstName,
      lastName: state.userFormFeature.lastName,
      businessName: state.userFormFeature.businessName,
      businessAddress: state.userFormFeature.businessAddress,
      year: state.userFormFeature.year,
      country: state.userFormFeature.country,
      accProvider: state.userFormFeature.accProvider,
      loanAmt: state.userFormFeature.loanAmt,
    },
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBalanceSheet: (businessName, accProvider, loanAmt) => {
      dispatch(fetchBalanceSheet(businessName, accProvider, loanAmt));
    },
    sendApplication: (data, preAssesment, profitLossSummary) => {
      dispatch(sendApplication(data, preAssesment, profitLossSummary));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetails);
