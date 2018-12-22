import React from 'react'
import {shallow} from 'enzyme'

import FavouriteQuoteCell from '../../Components/FavouriteQuoteCell'
import {favouriteItem} from '../fixtures/favourites-fixture'


describe('testing FavouriteQuoteCell', () => {
    let wrapper,navigation 

    beforeEach(() => {
        navigation = {
            navigate: jest.fn()
        }
        wrapper = shallow(<FavouriteQuoteCell navigation={navigation} item={favouriteItem}/>)
    })

    it('should render FavouriteQuoteCell correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should perform naviggation with correct params',() => {
        wrapper.find('TouchableHighlight').first().props().onPress()
        expect(navigation.navigate).toHaveBeenLastCalledWith(
            'Quotes',
            {
                id: favouriteItem.parentId,
                category: favouriteItem.category
            }
        )
    })
})