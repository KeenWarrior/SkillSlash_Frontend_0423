const initialState = [];
  
  const messageReducer = (state = initialState, action) => {
    switch (action.type) {
      case "ADD_MESSAGE":
        return [...state, action.payload];
      default:
        return state;
    }
  };

  export default messageReducer;
  