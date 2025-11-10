export const initialState = [];

export const reducer = (state, action) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "edit":
      return state.map((item) =>
        item.id === action.payload.id ? { ...item, ...action.payload } : item
      );
    case "delete":
      return state.filter((item) => item.id !== action.payload);
    case "toggleFavorite":
      return state.map((item) =>
        item.id === action.payload ? { ...item, favorite: !item.favorite } : item
      );
    default:
      return state;
  }
};
