import { produce } from "immer";

const fruitsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_FRUIT":
      return produce(state, (draft) => {
        draft.push(action.payload);
      });
    case "REMOVE_FRUIT":
      return state.filter((fruit) => fruit.id != action.payload);
    default:
      return state;
  }
};

export default fruitsReducer;
