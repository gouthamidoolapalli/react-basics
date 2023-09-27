export const MOVIE_CLICKED = "MOVIE_CLICKED";

export const movieClicked = (title) => ({
  type: MOVIE_CLICKED,
  payload: {
    data: title,
  },
});
