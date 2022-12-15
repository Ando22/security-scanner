import Detail from '../pages/[id]'
import { render, screen, cleanup } from "@testing-library/react";
import * as nextRouter from 'next/router';

jest.mock('next/router', () => ({
    useRouter: () => ({
      query: { id: '1' },
    }),
  }));

afterEach(cleanup);

describe("Detail Page", () => {
    it("renders detailpage", () => {
        render(<Detail />);
        // check if all components are rendered
        expect(screen.getByTestId("main")).toBeInTheDocument();
        expect(screen.getByTestId("findings")).toBeInTheDocument();
    });
});