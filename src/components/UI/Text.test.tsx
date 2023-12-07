import {render, screen } from "@testing-library/react"
import Text from "./Text"

test("displays the correct title",()=>{
    render(<Text />);
    const message = screen.queryByText(/Hello world/i);
    expect(message).toBeVisible();
})