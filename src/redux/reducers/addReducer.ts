import { ADD_USER } from "../actions/actionTypes";

const initialState = {
  users: [],
};

const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      const { user } = action.payload;
      return {
        ...state,
        users: [...state.users, user],
      };
    }
    default:
      return { state };
  }
};
export default addReducer;
