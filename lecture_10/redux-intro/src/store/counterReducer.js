const counterReducer = (state = 1, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return 0;
    case "CINCREMENT":
        return state + action.payload;
    default:
      return state;
  }
};

const counter5Reducer = (state = 5, action) => {
  switch (action.type) {
    case "INCREMENT5":
      return state + 5;
    case "DECREMENT5":
      return state - 5;
    case "RESET5":
      return (state = 0);
    default:
      return state;
  }
};



export  {counterReducer, counter5Reducer};
