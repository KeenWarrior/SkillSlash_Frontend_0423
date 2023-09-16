const initialState = null;

const userReducer = (state = initialState, action) => {

    if (action.type === 'UPDATE_USER') {
        return action.payload;
    }

    if (action.type === 'LOGOUT_USER') {
        return null;
    }

    return state;
}

export default userReducer;


