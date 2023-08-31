import { VALIDATE_FORM } from "./UserFormActionTypes";

console.log('action called')

export function updateField(type,value) {
    return (dispatch) => {
        dispatch({
            type: type,
            payload: value
        });
    }
}
export function validateForm() {
    return(dispatch) => {
        dispatch({
            type: VALIDATE_FORM,
        })
    }
}