import Results, { formatJobList, formatQueryParams } from ".";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { waitForElementToBeRemoved, screen } from "@testing-library/react";
import { render } from "../../utils/test";


describe('The formatJobList function', () => {
    it('should add a comma to a word', () => {
        const expectedState = 'item2,' 
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('should not add a comma to the last element of the list', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

describe('The formatQueryParams function', () => {
    it('should use the right format for param', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('should concatenate params with an &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(expectedState)
    })
})

const resultsMockedData = [
    {
        title: 'seo',
        description: `The seo is in charge of the web referencing of a page`,
    },
]

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({resutsData: resultsMockedData}))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('The Results component', () => {
    test('Should display the results after the data is loaded', async () => {
        render(<Results />)
        await waitForElementToBeRemoved(() => screen.queryByTestId('loader'))
        const jobTitleElements = screen.queryAllByTestId('job-title')
        expect(jobTitleElements.textContent).toBe(resultsMockedData.title)
        const jobDescriptionElements = screen.queryAllByTestId('job-description')
        expect(jobDescriptionElements.textContent).toBe(resultsMockedData.description)
    })
})