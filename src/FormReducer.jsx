export const initialState = {
  step: 1,
  firstname: "",
  lastname: "",
  email: "",
  phone: "",
  password: "",
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT":
      return { ...state, step: state.step + 1 };
    case "PREV":
      return { ...state, step: state.step - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
