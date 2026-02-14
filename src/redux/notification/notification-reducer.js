export const SHOW_NOTIFICATION = "notification/SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "notification/HIDE_NOTIFICATION";

export const showNotification = ({ message, type = "info" }) => ({
  type: SHOW_NOTIFICATION,
  payload: { message, type },
});

export const hideNotification = () => ({
  type: HIDE_NOTIFICATION,
});

const initialState = {
  message: null,
  type: "info",
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_NOTIFICATION:
      return {
        ...state,  
        message: action.payload.message,
        type: action.payload.type,
      };
      
    case HIDE_NOTIFICATION:
      return {
        ...state,
        message: null,
        type: "info",
      };
      
    default:
      return state;
  }
};

export default notificationReducer;