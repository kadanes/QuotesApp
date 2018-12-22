import React from 'react'
import CategoryCell from '../../Components/CategoryCell'
import { shallow } from 'enzyme'

import quotes from '../fixtures/quotes-fixture'

describe("testing CategoryCell component", () => {
    let wrapper,navigation

    beforeEach(() => {
    navigation = {
        navigate: jest.fn()
    }
    wrapper = shallow(<CategoryCell Category={quotes[0]} id={0} navigation={navigation} />);
    });

    it('category-cell renders correctly', () => {
        expect(wrapper).toMatchSnapshot()
    })

    it('should navigate with correct props',() => {
        wrapper.find('TouchableOpacity').first().props().onPress()
        expect(navigation.navigate).toHaveBeenLastCalledWith(
            'Quotes',
            {
                id: 0,
            }
        )
    })
})