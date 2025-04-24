import { fireEvent, render, screen } from "@testing-library/react"
import { AddCategory } from "../../src/components/AddCategory"

describe('testing component <AddCategory></AddCategory>', () => { 

    test('should change the value box text ', () => { 

        render( <AddCategory  onNewCategory={()=> {}}/>)
        const input = screen.getByRole('textbox')
        // console.log(input)
        
        fireEvent.input(input, {target: {value: 'Pikachu'}})

        expect(input.value).toBe('Pikachu')

        // screen.debug()
     })
     
     test('should call onNewCategory if the input have a value', () => { 
        const inputValue = 'Pikachu'
        const onNewCategory = jest.fn()
        // TODO
        render( <AddCategory  onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form)

        // screen.debug()
        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled()
        // expect(onNewCategory).toHaveBeenCalledTimes(2)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue)


      })

      test('should ot called onNewCategory if the input is empty ', () => { 
        const inputValue = ''
        const onNewCategory = jest.fn()
        render( <AddCategory  onNewCategory={onNewCategory}/>)
        const input = screen.getByRole('textbox')
        const form = screen.getByRole('form')

        fireEvent.input(input,{target:{value:inputValue}})
        fireEvent.submit(form)

        expect(onNewCategory).not.toHaveBeenCalled()

        
       })
 })