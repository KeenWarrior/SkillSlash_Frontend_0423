const initialState = {
  userName: "",
  email: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        userName: action.payload.userName,
        email: action.payload.email,
      };
    default:
      return state;
  }
};

export default userReducer;
