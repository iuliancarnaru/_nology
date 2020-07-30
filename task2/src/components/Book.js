import React from "react";

const Book = (book) => {
  const {
    volumeInfo: {
      title,
      authors,
      pageCount,
      publishedDate,
      imageLinks: { thumbnail },
    },
  } = book.book;

  return (
    <div
      style={{
        border: "1px solid grey",
        minWidth: "300px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <p>
        <strong>{title}</strong>
      </p>
      <img src={thumbnail} alt={"x"} />
      <div
        style={{
          border: "1px solid grey",
          width: "100%",
          textAlign: "center",
          marginTop: 20,
          backgroundColor: "#333",
          color: "#fff",
        }}
      >
        <p style={{ fontSize: 12 }}>Published date: {publishedDate}</p>
        <p style={{ fontSize: 12 }}>
          Authors:{" "}
          {authors.map((author, index) => {
            return (
              <span>
                <strong>
                  {author}
                  {index !== authors.length - 1 ? " and " : ""}
                </strong>
              </span>
            );
          })}
        </p>
        <p style={{ fontSize: 12 }}>Number of pages - {pageCount}</p>
      </div>
    </div>
  );
};

export default Book;
