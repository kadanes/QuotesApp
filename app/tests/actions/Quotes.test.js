import {
    setQuotes,
    setError,
    fetchQuotes,
    saveQuote,
    watchSaveQuote,
    unsaveQuote,
    watchUnsaveQuote,
    setFavourites
} from '../../actions/Quotes'

import quotes from '../fixtures/quotes-fixture'
import favourites from '../fixtures/favourites-fixture'

describe('testing actions', () => {
    it('should creat an action to set quotes',() => {
        const expectedAction = {
            type: 'SET_QUOTES',
            data: quotes
        }
        expect(setQuotes(quotes)).toEqual(expectedAction)
    })

    it('should creat an action to set error',() => {
        const expectedAction = {
            type: 'SET_ERROR'
        }
        expect(setError()).toEqual(expectedAction)
    })

    it('should creat an action to fetch quotes',() => {
        const expectedAction = {
            type: 'FETCH_QUOTES'
        }
        expect(fetchQuotes()).toEqual(expectedAction)
    })

    it('should creat an action to save quotes',() => {
        const parentId = 0, id = 0
        const expectedAction = {
            type: 'SAVE_QUOTE',
            parentId,
            id
        }
        expect(saveQuote(parentId,id)).toEqual(expectedAction)
    })

    it('should creat an action to watch save quotes',() => {
        const parentId = 0, id = 0
        const expectedAction = {
            type: 'WATCH_SAVE_QUOTE',
            parentId,
            id
        }
        expect(watchSaveQuote(parentId,id)).toEqual(expectedAction)
    })

    it('should creat an action to unsave quotes',() => {
        const parentId = 0, id = 0
        const expectedAction = {
            type: 'UNSAVE_QUOTE',
            parentId,
            id
        }
        expect(unsaveQuote(parentId,id)).toEqual(expectedAction)
    })

    it('should creat an action to watch unsave quotes',() => {
        const parentId = 0, id = 0
        const expectedAction = {
            type: 'WATCH_UNSAVE_QUOTE',
            parentId,
            id
        }
        expect(watchUnsaveQuote(parentId,id)).toEqual(expectedAction)
    })

    it('should create an action to set favourites when no list passed', () => {
        const expectedAction = {
            type: 'SET_FAVOURITES',
            quoteIds: []
        }
        expect(setFavourites()).toEqual(expectedAction)
    })

    it('should create an action to set favourites when list passed', () => {
        const expectedAction = {
            type: 'SET_FAVOURITES',
            quoteIds: favourites
        }
        expect(setFavourites(favourites)).toEqual(expectedAction)
    })
})