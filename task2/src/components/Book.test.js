import React from "react";
import { render, cleanup } from "@testing-library/react";
import Book from "./Book";

describe("Expect <Book>", () => {
  it("to render", () => {
    const { getByTestId } = render(<Book />);
    expect(getByTestId("book-wrapper")).toBeInTheDocument();
  });

  afterEach(cleanup);
});
