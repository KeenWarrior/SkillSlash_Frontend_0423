const initialState = {
  chats: new Map(),
  availableMessages: new Set(),
};

const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      console.log(action.payload);
      if(!state.availableMessages.has(action.payload.message._id)) {
        state.availableMessages.add(action.payload.message._id);
        const { withPerson, message } = action.payload;
        if (!state.chats.has(withPerson)) {
          state.chats.set(withPerson, []);
        }
        const chatsWith = state.chats.get(withPerson);
        chatsWith.push(message);
        return { chats: state.chats, availableMessages: state.availableMessages };
      } else {
        return state;
      }
      
    default:
      return state;
  }
};

export default messagesReducer;
