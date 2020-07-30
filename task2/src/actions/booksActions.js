export const GET_BOOKS = "GET_BOOKS";
export const GET_BOOKS_SUCCESS = "GET_BOOKS_SUCCESS";
export const GET_BOOKS_FAILURE = "GET_BOOKS_FAILURE";

export const getBooks = () => ({
  type: GET_BOOKS,
});

export const getBooksSuccess = (books) => ({
  type: GET_BOOKS_SUCCESS,
  payload: books,
});

export const getBooksFailure = () => ({
  type: GET_BOOKS_FAILURE,
});

// create async thunk function
export function fetchBooks() {
  return async (dispatch) => {
    dispatch(getBooks());

    try {
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q="javascript"`
      );
      const data = await response.json();
      dispatch(getBooksSuccess(data.items));
    } catch (e) {
      dispatch(getBooksFailure());
    }
  };
}
