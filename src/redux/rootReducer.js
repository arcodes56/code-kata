import {combineReducers} from 'redux';
import reducer from '../containers/BalanceSheet/SheetReducer';
import formReducer from '../containers/UserForm/UserFormReducer';
console.log('root called')
const rootReducer = combineReducers({
    sheetFeature: reducer,
    userFormFeature: formReducer,

});
export default rootReducer;