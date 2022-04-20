import { render, screen, cleanup } from "@testing-library/react";

import NotFound from "./NotFound.jsx";

const text = "It seems like you are lost in the space.";

afterEach(cleanup);
it("matches snapshot", () => {
  const { asFragment } = render(<NotFound text={text} />);

  expect(asFragment()).toMatchSnapshot();
});
