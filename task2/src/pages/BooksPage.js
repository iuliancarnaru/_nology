import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

import { fetchBooks } from "../actions/booksActions";
import Book from "../components/Book";
import Navbar from "../components/Navbar";

const BooksPage = ({ dispatch, books, loading, hasErrors }) => {
  const renderBooks = () => {
    if (loading) return <Loader />;
    if (hasErrors) return <p>Unable to display books.</p>;
    return books.map((book) => <Book key={book.id} book={book} />);
  };

  return (
    <BooksPageWrapper>
      <BooksPageTitle>Looking for books?</BooksPageTitle>
      <Navbar fetchBooks={fetchBooks} dispatch={dispatch} loading={loading} />
      <BooksWrapper>{renderBooks()}</BooksWrapper>
    </BooksPageWrapper>
  );
};

const mapStateToProps = ({ books: { books, loading, hasErrors } }) => ({
  books,
  loading,
  hasErrors,
});

BooksPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  books: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  hasErrors: PropTypes.bool.isRequired,
};

const BooksPageWrapper = styled.div`
  margin: 40px 0;
`;

const BooksPageTitle = styled.h1`
  text-align: center;
  font-size: 36px;
  font-family: "Gentium Book Basic", serif;
`;

const BooksWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  padding: 50px;
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-radius: 50%;
  border-top: 10px solid #3498db;
  width: 50px;
  height: 50px;
  -webkit-animation: ${spin} 2s linear infinite; /* Safari */
  animation: ${spin} 2s linear infinite;
`;

export default connect(mapStateToProps)(BooksPage);
