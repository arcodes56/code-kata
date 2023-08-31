import {BalanceSheetMockData} from "../../mockedData/BalanceSheetMockData";
import { BALANCE_SHEET_FETCH_FAILURE, BALANCE_SHEET_FETCH_SUCCESS, DECISION_FETCH_SUCCESS, DECISION_FETCH_ERROR } from "./SheetActionTypes";

const initialState = {
    data: [],
    preAssesment: "",
    decision: "success",
    profitLossSummary: null
};

const reducer = (state = initialState, action) => {
    let percent;
    switch(action.type) {
        case BALANCE_SHEET_FETCH_SUCCESS:
            percent = getPreAssessment(action.payload.data, action.payload.loanAmt);
            return Object.assign({}, state, {
                data: action.payload.data,
                preAssesment: percent[1],
                profitLossSummary: percent[0],
            });
        case BALANCE_SHEET_FETCH_FAILURE:
            percent = getPreAssessment(action.payload.data, action.payload.loanAmt);
            return Object.assign({}, state, { 
                data: BalanceSheetMockData,
                preAssesment: percent[1],
                profitLossSummary: percent[0],
            });
        case DECISION_FETCH_SUCCESS:
            return Object.assign({}, state, {
                decision: action.payload
            });
        case DECISION_FETCH_ERROR:
            return Object.assign({}, state, {
                decision: "success"
            })

        default: 
            return state;
    }
}

function getPreAssessment(data, loanAmt) {
    let profit=0,totalAsset=0;
    data.forEach((item)=> {
        profit+= item.profitOrLoss;
        totalAsset+= item.assetsValue;
    })
    if(totalAsset/12 > loanAmt) return [profit,"100"];
    if(profit>0) return [profit,"60"];
    return [profit,"20"];
}


export default reducer;