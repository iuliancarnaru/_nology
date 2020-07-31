import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Book = (book) => {
  const {
    volumeInfo: {
      title,
      authors = ["Data not available"],
      pageCount = "Data not available",
      publishedDate,
      imageLinks: { thumbnail } = {
        thumbnail:
          "https://www.azfinesthomes.com/assets/images/image-not-available.jpg",
      },
    },
  } = book.book;

  return (
    <BookCardWrapper data-testid="book-wrapper">
      <BookCardTitle>{title.toUpperCase()}</BookCardTitle>
      <BookCardImage src={thumbnail} alt={title} />
      <BookCardDetails>
        <BookCardPublished>Published date: {publishedDate}</BookCardPublished>
        <BookCardAuthors>
          Authors:{" "}
          {authors.map((author, index) => {
            return (
              <span key={author}>
                <strong>
                  {author}
                  {index !== authors.length - 1 ? " and " : ""}
                </strong>
              </span>
            );
          })}
        </BookCardAuthors>
        <BookCardPages>Number of pages - {pageCount}</BookCardPages>
      </BookCardDetails>
    </BookCardWrapper>
  );
};

Book.propTypes = {
  book: PropTypes.object,
};

const BookCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex: 0 1 250px;
  font-family: "Ubuntu", sans-serif;
  transition: all 0.3s ease-in-out;

  @media screen and (max-width: 415px) {
    flex: 0 1 80%;
  }

  padding: 10px;
  -webkit-box-shadow: 2px 4px 17px 0 rgba(0, 0, 0, 0.45);
  -moz-box-shadow: 2px 4px 17px 0 rgba(0, 0, 0, 0.45);
  box-shadow: 2px 4px 17px 0 rgba(0, 0, 0, 0.45);

  &:hover {
    transform: scale(1.04);
  }
`;

const BookCardTitle = styled.h2`
  font-size: 16px;
  text-align: center;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 35px;
  font-weight: bold;
`;

const BookCardImage = styled.img`
  width: 153px;
  height: 200px;
  object-fit: cover;
  border: 2px solid rgba(66, 37, 59, 0.1);
  padding: 5px;
`;

const BookCardDetails = styled.div`
  border: 1px solid grey;
  width: 100%;
  text-align: center;
  background-color: #42253b;
  color: #fff;
  padding: 0 10px;
  font-size: 12px;
  margin: 20px 0 10px 0;
`;

const BookCardPublished = styled.p``;

const BookCardAuthors = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const BookCardPages = styled.p``;

export default Book;
