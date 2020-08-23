export const initialState = [
  {
    item: "First Item",
    completed: false,
    id: 1
  },
  {
    item: "Second Item",
    completed: false,
    id: 2
  },
  {
    item: "Third Item",
    completed: false,
    id: 3
  }
];

export const todoReducer = (state = initialState, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];

    case "TOGGLE_TODO":
      console.log("toggle called");
      return (
        [...state],
        state.map(todo => {
          if (todo.id === action.payload) {
            return {
              item: todo.item,
              completed: !todo.completed,
              id: todo.id
            };
          } else {
            return todo;
          }
        })
      );
    case "CLEAR_COMPLETED":
      console.log("clear completed called");
      return state.filter(todo => {
        return todo.completed === false;
      });
    default:
      return state;
  }
};