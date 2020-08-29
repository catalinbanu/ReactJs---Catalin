import { ADD_USER } from "./actionTypes";

let nextUserId = 0;

export const addUser = (content) => ({
  type: ADD_USER,
  payload: {
    id: ++nextUserId,
    content: content,
  },
});
