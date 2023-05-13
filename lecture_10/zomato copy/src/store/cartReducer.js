const initialState = {
  hotel: {
    id: 1,
    name: "Hotel Taj",
    address: "Mumbai",
  },
  cartItems: new Map(),
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_DISH":
      console.log("ADD_DISH");
      if (state.cartItems.has(action.payload.id)) {
        const { dish, count } = state.cartItems.get(action.payload.id);
        state.cartItems.set(action.payload.id, { dish, count: count + 1 });
      } else {
        state.cartItems.set(action.payload.id, { dish: action.payload, count: 1 });
      }
      return { ...state };
    case "REMOVE_DISH":
      if (state.cartItems.has(action.payload.id)) {
        const { dish, count } = state.cartItems.get(action.payload.id);
        state.cartItems.set(
          action.payload.id,
          { dish, count: count - 1}
        );

        if (count === 1) {
          state.cartItems.delete(action.payload.id);
        }
      }

      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
