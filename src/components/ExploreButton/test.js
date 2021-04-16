import {screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { MemoryRouter } from 'react-router-dom'
import ExploreButton from '.'

describe('ExploreButton', () => {
    test("button takes user to albums page", () => {
        render(<ExploreButton />, {wrapper: MemoryRouter})
        const exploreBttn = screen.getByRole('button')
        expect(exploreBttn).toBeInTheDocument()
})

})