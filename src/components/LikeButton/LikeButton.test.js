import { screen } from '@testing-library/react';

import LikeButton from '.';

describe('LikeButton', () => {
    beforeEach(() => {
        render(<LikeButton />)
    })

    test('renders a button with a heart (❤︎) in it', () => {
       let heartButton = screen.getByRole('switch')
       expect(heartButton.textContent).toBe('❤︎')
    })

    test('toggles to a different heart emoji', () => {
        let heartButton = screen.getByRole('switch')
        let initEmoji = heartButton.style.color
        userEvent.click(heartButton)
        let clickEmoji = heartButton.style.color
        expect(clickEmoji).not.toBe(initEmoji)
    })
});