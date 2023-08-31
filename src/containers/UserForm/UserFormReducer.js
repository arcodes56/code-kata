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
    if(!str || /^\s*$/.test(str)) return "Error";
    else return null;
}
function validateYearField(year){
    var pattern = /^(?!0000)\d{4}$/;
   if(pattern.test(year)) return null;
   else return "Error year" ;
}
function validateLoanField(loan) {
    if(loan<=0 && loan>= 100000) return "error";
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