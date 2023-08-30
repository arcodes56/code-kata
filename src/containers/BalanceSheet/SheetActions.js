import {BalanceSheetMockData} from "../../mockedData/BalanceSheetMockData"
import { BALANCE_SHEET_FETCH_SUCCESS, BALANCE_SHEET_FETCH_FAILURE, DECISION_FETCH_ERROR, DECISION_FETCH_SUCCESS } from "./SheetActionTypes"
import axios from "axios";

console.log('action called')
export function fetchBalanceSheet (businessName, accProvider, loanAmt) {
    return (dispatch)=> {
        axios.get(`/api/getBalanceSheets/${businessName}/${accProvider}`)
        .then(response => {
            dispatch({
                type: BALANCE_SHEET_FETCH_SUCCESS,
                payload: {
                data : response.data,
                loanAmt: loanAmt
            }
            })
        })
        .catch( error =>
            dispatch({
                type: BALANCE_SHEET_FETCH_FAILURE,
                payload: {
                data: BalanceSheetMockData,
                loanAmt: loanAmt
            }
            }))
    }
}

export function sendApplication(data) {
    return (dispatch) => {
        axios.post('/api/decisionEngine', data)
        .then(response => {
            dispatch({
                type: DECISION_FETCH_SUCCESS,
                payload: response.data
            });
        })
        .catch(error => {
            dispatch({
                type: DECISION_FETCH_ERROR
            });
        })
    }
}