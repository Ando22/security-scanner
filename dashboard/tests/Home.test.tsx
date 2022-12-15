import Home from "../pages";
import { render, screen, cleanup } from "@testing-library/react";

jest.mock('next/router', () => ({
  useRouter: () => ({
    path: '/',
  }),
}));

afterEach(cleanup);


describe("Home Page", () => {
    it("renders homepage", () => {
      render(<Home />);
      // check if all components are rendered
      expect(screen.getByTestId("title")).toBeInTheDocument();
      expect(screen.getByTestId("main")).toBeInTheDocument();
      expect(screen.getByTestId("table")).toBeInTheDocument();
    });
  });