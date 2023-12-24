export const initialState = null;
 
export const reducer = (state, action) => {

    if (action.type === "senior admin"){
        return action.payload;
    }
    else  if (action.type === "user"){
        return action.payload;
    }

    return state;
}