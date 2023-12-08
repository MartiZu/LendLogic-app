import { render, screen } from "@testing-library/react";
import Home from "../app/page";
import { describe } from "node:test";
// import '@testing-library/jest-dom/extend-expect';

//skeleton example
// it("renders the home page", () => {
//   //arrange
//   render(<Home />);
//   //action
//   const myElement = screen.getByText("Mortgage");
//   //assertion
//   expect(myElement).toBeInTheDocument();
// });

describe("Home", () => {
    it("renders the home page", () => {
      //arrange
      render(<Home />);
    });
  it("should contain the word Mortgage", () => {
    //arrange
    render(<Home />);
    //action
    const myElement = screen.getByText("Mortgage");
    //assertion
    expect(myElement).toBeInTheDocument();
  });
});