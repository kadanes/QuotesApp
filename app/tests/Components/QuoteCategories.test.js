import React from 'react'
import {shallow} from 'enzyme'

import {QuoteCategories} from '../../Components/QuoteCategories'
import quotes from '../fixtures/quotes-fixture'

describe('Testing QuoteCategories component', () => {

    it('should load error button when error loading', ( ) => {
            const wrapper = shallow(
                <QuoteCategories
                loading = {false}
                error = {true}
                data = {undefined} 
                />
            )
            expect(wrapper).toMatchSnapshot()
        }
    )

    it('should show loader', ( ) => {
            const wrapper = shallow(
                <QuoteCategories
                loading = {true}
                error = {false}
                data = {undefined} 
                />
            )
            expect(wrapper).toMatchSnapshot()
        }
    )

    it('should show categories list', ( ) => {
            const wrapper = shallow(
                <QuoteCategories
                loading = {false}
                error = {false}
                data = {quotes} 
                />
            )

            expect(wrapper).toMatchSnapshot()
        }
    )

    it('should call relod on button press',() => {
        
        const fetchQuotesSpy = jest.fn()

        const wrapper = shallow(
                <QuoteCategories
                loading = {false}
                error = {true}
                data = {undefined} 
                fetchQuotes = {fetchQuotesSpy}
                />
            )
            wrapper.find('Button').simulate('press')

            expect(fetchQuotesSpy).toBeCalled()

        }
    )
})