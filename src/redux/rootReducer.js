import {combineReducers} from 'redux';
import reducer from '../containers/BalanceSheet/SheetReducer';
console.log('root called')
const rootReducer = combineReducers({
    sheetFeature: reducer
});
export default rootReducer;