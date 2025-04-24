import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe("test component <GifGrid/>", () => {
  const category = "Pikachu";
  test("should show loading", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      isLoading: true,
    });

    render(<GifGrid category={category} />);

    // screen.debug()
    expect(screen.getByText("Loading..."));
    expect(screen.getByText(category));
  });

  test("should show the items when load images  ", () => {
    const image = [
      {
        id: "abc",
        title: "Pikachu",
        url: "https://localhost/Pikachu.jsp",
      },
      {
        id: "123",
        title: "Goku",
        url: "https://localhost/Goku.jsp",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs: image,
      isLoading: false,
    });

    render(<GifGrid category={category} />);
    expect(screen.getAllByRole('img').length).toBe(2)
    // expect(screen.getByText('Loading...'))
    // expect(screen.getByText(category))
  });
});
