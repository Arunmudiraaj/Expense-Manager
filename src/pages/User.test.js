import User from "./User";
import { render, screen } from "@testing-library/react";
test('user renders', ()=>{
    render(<User/>)
    const element = screen.getByText('Edit')
    expect(element).toBeInTheDocument()
})