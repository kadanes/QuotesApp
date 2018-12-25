import React from 'react'
import {shallow} from 'enzyme'

import {QuotesList} from '../../Components/QuotesList'
import quotes from '../fixtures/quotes-fixture'
import favourites from '../fixtures/favourites-fixture'

const getParam = (id, def = 'null') => {
    switch (id) {
        default:
        return 0
        case 'category':
        return 'Inspirational'
    }
}

describe('Testing Quote List', () => {

    let wrapper,navigation

    beforeEach(()=>{
        
        let navigate = jest.fn()
        navigation = {
            navigate,
            getParam
        }

        wrapper = shallow(
                <QuotesList 
                    favourites={favourites}    
                    quotes={quotes}
                    navigation={navigation}
                />
            )
    })

    it('should render QuoteList',() => {
        expect(wrapper).toMatchSnapshot()
    })
})