import {screen } from '@testing-library/react'
import Greeting from './'

describe('Greeting', () => {
    beforeEach(() => {
        render(<Greeting />)
})

test("greets user with as a 'belieber' if no username entered", () =>{
    const greeting = screen.getByRole('heading', {name: 'greeting'})
    expect(greeting.textContent).toBe('Hi there, belieber! ')
})

test('greets user by name when user hits submit', () => {
    const nameInput = screen.getByLabelText('Username')
    userEvent.type(nameInput, "Semhar{enter}")
    const greeting = screen.getByRole('heading', {name: 'greeting'})
    expect(greeting.textContent).toBe('Hi there, Semhar! ')

})

test('does not change greeting while user types input', () => {
    const nameInput = screen.getByLabelText('Username')
    userEvent.type(nameInput, 'Semhar')
    const greeting = screen.getByRole('heading', {name: 'greeting'})
    expect(greeting.textContent).toBe('Hi there, belieber! ')
    expect(greeting.textContent).not.toBe('Hi there, Semhar! ')
    expect(nameInput.value).toBe('Semhar')
})

})

