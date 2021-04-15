import {screen } from '@testing-library/react'
import BackButton from './'

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />)
})

test("to have a back button", () =>{
    const backBttn = screen.getByRole('button', {name: 'back-button'})
    expect(backBttn.textContent).toBeInTheDocument()
    expect(backBttn.textContent).toContain('🔙 ')
})

})