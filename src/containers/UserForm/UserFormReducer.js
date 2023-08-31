import { EMPTY_FIELD_ERROR_MESSAGE, EMPTY_STRING_REGEX, INVALID_LOAN_AMT_ERROR, INVALID_YEAR_ERROR_MESSAGE, LOAN_MAX_AMT, LOAN_MIN_AMT, YEAR_REGEX } from "../../constants";
import { ACCOUNT_PROVIDER, BUSINESS_ADDRESS, BUSINESS_NAME, COUNTRY, FIRST_NAME, LAST_NAME, LOAN_AMT, VALIDATE_FORM, YEAR } from "./UserFormActionTypes";
console.log('red called')

const initialState = {
    firstName: '',
    firstNameError: null,
    lastName: '',
    lastNameError: null,
    businessName: '',
    businessNameError: null,
    businessAddress: '',
    year: '',
    yearError:null,
    country: '',
    countryError: null,
    accProvider: '',
    accProviderError: null,
    loanAmt: null,
    loanAmtError: null,
    isValidForm: false,
};

const formReducer = (state = initialState, action) => {
    switch(action.type){
        case FIRST_NAME:
            return Object.assign({},state,{
                firstName: action.payload,
                firstNameError: validateField(action.payload)
            });
        case LAST_NAME:
            return Object.assign({},state,{
                lastName: action.payload,
                lastNameError: validateField(action.payload)

            });
        case BUSINESS_NAME:
            return Object.assign({},state,{
                businessName: action.payload,
                businessNameError: validateField(action.payload)

            });
        case BUSINESS_ADDRESS:
            return Object.assign({},state,{
                businessAddress: action.payload,
            });
        case YEAR:
            return Object.assign({},state,{
                year: action.payload,
                yearError: validateYearField(action.payload)

            });
        case COUNTRY:
            return Object.assign({},state,{
                country: action.payload,
                countryError: validateField(action.payload)

            });
        case ACCOUNT_PROVIDER:
            return Object.assign({},state,{
                accProvider: action.payload,
                accProviderError: validateField(action.payload)

            });
        case LOAN_AMT:
            return Object.assign({},state,{
                loanAmt: action.payload,
                loanAmtError: validateLoanField(action.payload)

            });
        case VALIDATE_FORM:
            return Object.assign({}, state, {
                isValidForm: isValidForm(state),
            })
        default: 
            return state;
    }
};
function validateField (str){
    if(!str || EMPTY_STRING_REGEX.test(str)) return EMPTY_FIELD_ERROR_MESSAGE;
    else return null;
}
function validateYearField(year){
    var pattern = YEAR_REGEX;
   if(pattern.test(year)) return null;
   else return INVALID_YEAR_ERROR_MESSAGE ;
}
function validateLoanField(loanStr) {
    const loan = Number(loanStr);
    if(loan >= LOAN_MIN_AMT && loan >= LOAN_MAX_AMT) return INVALID_LOAN_AMT_ERROR;
    else return null;
}
function isValidForm(state) {
    return validateField(state.firstName) == null && 
    validateField(state.lastName) == null &&
    validateField(state.businessName) == null &&
    validateYearField(state.year) == null &&
    validateLoanField(state.loanAmt) == null &&
    validateField(state.country) == null &&
    validateField(state.accProvider) == null;
}
export default formReducer;