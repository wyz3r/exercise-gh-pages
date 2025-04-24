import { render, screen } from "@testing-library/react"
import { GridItem } from "../../src/components/GridItem"

describe(' testing component <GridItem />', () => { 
        const title = 'una_imagen'
        const url = 'url_del_Gif'
    test('should match with the snapshot', () => { 
        
        const {container} =  render(<GridItem title={title} url={url} />)
        expect(container).toMatchSnapshot()
     })

     test('should show the Image ith the URL and ALT correct', () => { 

        render(<GridItem title={title} url={url}/>)
        // screen.debug()
        const {alt, src} = screen.getByRole('img')
        expect(src).toContain(url)
        expect(alt).toContain(title)


      })
      
      test('should show the title into the component ', () => { 

        render(<GridItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy()

       })

       test('should validate render the class "card" ', () => { 
        render(<GridItem title={title} url={url}/>)
        const div = screen.getByTestId('card');
        expect(div.getAttribute('class')).toBe('card')
        })
 })