import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"




describe('Testing component <GifExpertApp />', () => { 

    test('should match initial values snapshot', () => { 

        const {container} =  render(<GifExpertApp />);
        expect(container).toMatchSnapshot()
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')
        
        fireEvent.input(input, {target:{value: 'Charizard'}})
        fireEvent.submit(form)
        

     })
 })