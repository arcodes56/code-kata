import {BalanceSheetMockData} from "../../mockedData/BalanceSheetMockData";
import { BALANCE_SHEET_FETCH_FAILURE, BALANCE_SHEET_FETCH_SUCCESS, DECISION_FETCH_SUCCESS, DECISION_FETCH_ERROR } from "./SheetActionTypes";

const initialState = {
    data: [],
    preAssesment: "",
    decision: "success",
};

const reducer = (state = initialState, action) => {
    let percent;
    switch(action.type) {
        case BALANCE_SHEET_FETCH_SUCCESS:
            percent = getPreAssessment(action.payload.data, action.payload.loanAmt);
            return Object.assign({}, state, {
                data: action.payload.data,
                preAssesment: percent,
            });
        case BALANCE_SHEET_FETCH_FAILURE:
            percent = getPreAssessment(action.payload.data, action.payload.loanAmt);
            return Object.assign({}, state, { 
                data: BalanceSheetMockData,
                preAssesment: percent,
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
    console.log(profit);
    console.log(totalAsset/12);
    if(totalAsset/12 > loanAmt) return "100";
    if(profit>0) return "60";
    return "20";
}


export default reducer;