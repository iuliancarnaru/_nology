import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Navbar = ({ dispatch, fetchBooks, loading }) => {
  const initialFormState = { book: "", author: "" };

  const [search, setSearch] = useState(initialFormState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearch({ ...search, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(fetchBooks(search));
    setSearch(initialFormState);
  };

  return (
    <NavbarFormWrapper>
      <form onSubmit={handleFormSubmit}>
        <FormInput
          type="text"
          name="book"
          value={search.book}
          placeholder="Search by book title"
          onChange={handleInputChange}
        />
        <FormInput
          type="text"
          name="author"
          value={search.author}
          placeholder="Search by author"
          onChange={handleInputChange}
        />
        <FormButton type="submit" disabled={loading}>
          Search
        </FormButton>
      </form>
    </NavbarFormWrapper>
  );
};

Navbar.propTypes = {
  dispatch: PropTypes.func.isRequired,
  fetchBooks: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

const NavbarFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const FormInput = styled.input`
  padding: 10px 20px;
  margin-right: 5px;
  border: 1px solid grey;
  border-radius: 5px;

  ::placeholder {
    color: #333;
  }
`;

const FormButton = styled.button`
  padding: 11px 21px;
  background-color: #42253b;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  border-radius: 5px;
`;

export default Navbar;
