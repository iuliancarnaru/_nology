import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchBooks } from "../actions/booksActions";
import Book from "../components/Book";

const BooksPage = ({ dispatch, books, loading, hasErrors }) => {
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const renderBooks = () => {
    if (loading) return <p>Loading books...</p>;
    if (hasErrors) return <p>Unable to display books.</p>;
    return books.map((book) => <Book key={book.id} book={book} />);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Looking for books?</h1>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        {renderBooks()}
      </div>
    </div>
  );
};

const mapStateToProps = ({ books: { books }, loading, hasErrors }) => ({
  books,
  loading,
  hasErrors,
});

export default connect(mapStateToProps)(BooksPage);
