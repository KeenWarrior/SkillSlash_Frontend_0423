const initialState = {
  hotel: 1234,
  dishes: new Map(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DISH":
      console.log("ADD_DISH");
      if (state.dishes.has(action.payload.id)) {
        state.dishes.set(
          action.payload.id,
          state.dishes.get(action.payload.id) + 1
        );
      } else {
        state.dishes.set(action.payload.id, 1);
      }
      return {...state};
    case "REMOVE_DISH":
      if (state.dishes.has(action.payload.id)) {
        state.dishes.set(
          action.payload.id,
          state.dishes.get(action.payload.id) - 1
        );

        if (state.dishes.get(action.payload.id) === 0) {
          state.dishes.delete(action.payload.id);
        }
      }

 
      return {...state};
    default:
      return state;
  }
};

export default cartReducer;
