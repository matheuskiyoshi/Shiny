import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { waitForElementToBeRemoved, screen } from '@testing-library/react'
import Freelancers from '.'
import { render } from '../../utils/test'
import '@testing-library/jest-dom/extend-expect'



const freelancersMockedData = [
    {
       name: 'Harry Potter',
       job: 'Frontend wizard',
       picture: '',
    },
    {
       name: 'Hermione Granger',
       job: 'Fullstack witch',
       picture: '',
    },
 ]

const server = setupServer(
    rest.get('http://localhost:8000/freelances', (req, res, ctx) => {
        return res(ctx.json({ freelancersList: freelancersMockedData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

it('Should display freelancers names after loader is removed', async () => {
    render(<Freelancers />)

    await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
    expect(screen.getByText('Harry Potter')).toBeInTheDocument()
    expect(screen.getByText('Hermione Granger')).toBeInTheDocument()
    expect(screen.queryByTestId('loader')).not.toBeInTheDocument()
})