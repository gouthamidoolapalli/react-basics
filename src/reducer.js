const initialState = {
  selectedMovieList: [],
};

export default (state = initialState, { type, payload }) => {
  //{ type, payload } is the action details like type is ITEM_CLICKED, payload has min info like itemId, title
  switch (type) {
    case "MOVIE_CLICKED":
      return {
        ...state,
        selectedMovieList: [...state.selectedMovieList, payload.data], //adding titles into my list hereß
      };

    default:
      return state;
  }
};
