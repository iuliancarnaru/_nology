import React from "react";
import styled from "styled-components";
import BooksPage from "./pages/BooksPage";

const App = () => {
  return (
    <AppWrapper>
      <BooksPage />
    </AppWrapper>
  );
};

const AppWrapper = styled.div``;

export default App;
