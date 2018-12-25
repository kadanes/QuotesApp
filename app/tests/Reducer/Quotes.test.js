import quotes,{getFavourites,getFavouriteQuotes} from '../../Reducer/Quotes'

import {
    setQuotes,
    setError,
    saveQuote,
    unsaveQuote,
    setFavourites
} from '../../actions/Quotes'

import quotesFixture from '../fixtures/quotes-fixture'
import favourites from '../fixtures/favourites-fixture'


describe('testing reducer',() => {

    const defaultState = {
        loading: true,
        error: false,
        data: undefined,
        favourites: [],
        favouritesLoading: true,
    }

    it('should return initial state',() => {
        expect(quotes(undefined,{})).toEqual(defaultState)
    })

    it('should set quotes',() => {
        expect(quotes(defaultState,setQuotes(quotesFixture))).toEqual({
            ...defaultState,
            loading: false,
            error: false,
            data: quotesFixture
        })
    })

    it('should set error',() => {
        expect(quotes(defaultState,setError())).toEqual({
            ...defaultState,
            error: true,
            loading: false
        })
    })

    it('should save quote when does not exist',() => {
        expect(quotes(defaultState,saveQuote(0,0))).toEqual({
            ...defaultState,
            favourites: ['0_0']
        })
    })

    it('should not save quote when exists',() => {
        const newDefaultState = {
            ...defaultState,
            favourites: ['0_0']
        }
        expect(quotes(newDefaultState,saveQuote(0,0))).toEqual({
            ...defaultState,
            favourites: ['0_0']
        })
    })

    it('should unsave quote when exists',() => {
        const newDefaultState = {
            ...defaultState,
            favourites: ['0_0']
        }
        expect(quotes(newDefaultState,unsaveQuote(0,0))).toEqual({
            ...defaultState,
            favourites: []
        })
    })
    
    it('should not unsave quote when does not exist',() => {
        const newDefaultState = {
            ...defaultState,
            favourites: ['0_1']
        }
        expect(quotes(newDefaultState,unsaveQuote(0,0))).toEqual({
            ...defaultState,
            favourites: ['0_1']
        })
    })
    
    it('should set favourite ids',() => {
        const quoteIds = ['0_0','0_1','1_1']
        const newDefaultState = quotes(defaultState,setQuotes(quotesFixture))

        expect(quotes(newDefaultState,setFavourites(quoteIds))).toEqual({
            ...newDefaultState,
            favourites: quoteIds,
            favouritesLoading: false
        })
    })

    it('should return favourites',() => {
        const quoteIds = ['0_0','0_1','1_1']
        let newDefaultState = quotes(defaultState,setQuotes(quotesFixture))
        newDefaultState = quotes(newDefaultState,setFavourites(quoteIds))

        expect(getFavourites(newDefaultState)).toEqual(quoteIds)
    })

    it('should return favourite quotes',() => {
        const quoteIds = ['0_0','0_1','1_1']
        let newDefaultState = quotes(defaultState,setQuotes(quotesFixture))
        newDefaultState = quotes(newDefaultState,setFavourites(quoteIds))

        expect(getFavouriteQuotes(newDefaultState)).toEqual(
            [{
                ...quotesFixture[0].quotes[0],
                category: quotesFixture[0].category,
                parentId: '0'
            },{
                ...quotesFixture[0].quotes[1],
                category: quotesFixture[0].category,
                parentId: '0'
            },{
                ...quotesFixture[1].quotes[1],
                category: quotesFixture[1].category,
                parentId: '1'
            }]
        )
    })
})