import Footer from ".";
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider } from "../../utils/context";

describe('Footer', () => {
    test('Should render without crash', async () => {
        render(
            <ThemeProvider>
                <Footer />
            </ThemeProvider>
        )
        const nightModeButton = screen.getByRole('button')
        expect(nightModeButton.textContent).toBe('Change the mode : ☀')
        fireEvent.click(nightModeButton)
        expect(nightModeButton.textContent).toBe('Change the mode : 🌙')
    })
})