import {screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom';
import BackButton from './'

describe('BackButton', () => {
    beforeEach(() => {
        render(<BackButton />, { wrapper: MemoryRouter })
})

test("to have a back button", () =>{
    const backBttn = screen.findByRole("button")
    expect(backBttn).toBeInTheDocument()
    expect(backBttn.textContent).toContain('🔙 ')
})

})