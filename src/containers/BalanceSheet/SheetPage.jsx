import { connect } from "react-redux";
import { fetchBalanceSheet, sendApplication } from "./SheetActions";
import ReviewDetails from "../../components/ReviewDetails";

const mapStateToProps = (state) => {
  return {
    data: state.sheetFeature.data,
    preAssesment: state.sheetFeature.preAssesment,
    decision: state.sheetFeature.decision,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchBalanceSheet: (businessName, accProvider, loanAmt) => {
      dispatch(fetchBalanceSheet(businessName, accProvider, loanAmt));
    },
    sendApplication: (data) => {
      dispatch(sendApplication(data));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ReviewDetails);
