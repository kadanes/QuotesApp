import React from 'react'
import {FavouriteQuotesList} from '../../Components/FavouriteQuotesList'

import { shallow } from 'enzyme'
import quotes from '../fixtures/quotes-fixture'
import favourites from '../fixtures/favourites-fixture'


describe('testing FavouriteQuotesList component', () => {

    it('should wait for favourites',() => {
        const wrapper = shallow(<FavouriteQuotesList quotes={quotes} favourites={favourites} loading={true}/>)
        expect(wrapper).toMatchSnapshot()
    })

    it('should display favourite list', () => {
        const wrapper = shallow(<FavouriteQuotesList quotes={quotes} favourites={favourites} loading={false}/>)
        expect(wrapper).toMatchSnapshot()
    }) 
})







