import React from 'react'
import {shallow} from 'enzyme'

import {QuoteCell} from '../../Components/QuoteCell'
import quotes from '../fixtures/quotes-fixture'
import favourites from '../fixtures/favourites-fixture'

describe('Testing QuoteCell', () => {
    let save,unsave

    beforeEach(() => {
        save = jest.fn()
        unsave = jest.fn()
    })
    
    it('should render component corretly', () => {
        let wrapper = shallow(
            <QuoteCell 
                quote={quotes[0].quotes[0]}
                favourites={favourites} 
                save={save} unsave={unsave} 
                parentId={0} 
                index={0}
            />
        )

        expect(wrapper).toMatchSnapshot()
    })

    it('should unsave favourite', () => {
        let wrapper = shallow(
            <QuoteCell 
                quote={quotes[0].quotes[0]}
                favourites={favourites} 
                save={save} unsave={unsave} 
                parentId={0} 
                index={0}
            />
        )
        wrapper.find('TouchableOpacity').first().props().onPress()
        expect(unsave).toHaveBeenLastCalledWith(0,0)
        expect(save).not.toBeCalled()
    })

    it('should save favourite', () => {
        let wrapper = shallow(
            <QuoteCell 
                quote={quotes[0].quotes[1]}
                favourites={favourites} 
                save={save} unsave={unsave} 
                parentId={0} 
                index={1}
            />
        )
        wrapper.find('TouchableOpacity').first().props().onPress()
        expect(save).toHaveBeenLastCalledWith(0,1)
        expect(unsave).not.toBeCalled()
    })
})