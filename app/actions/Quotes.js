export const setQuotes = (data = {warning: 'NO QUOTES PASSED IN'}) => {
    return {
        type: 'SET_QUOTES',
        data
    }
   
}
export const setError = () => ({
    type: 'SET_ERROR',
})

export const fetchQuotes = () => ({
    type: 'FETCH_QUOTES',
})

export const saveQuote = (parentId,id) => ({
    type: 'SAVE_QUOTE',
    parentId,
    id
})

export const watchSaveQuote = (parentId,id) => ({
    type: 'WATCH_SAVE_QUOTE',
    parentId,
    id
})


export const unsaveQuote = (parentId,id) => ({
    type: 'UNSAVE_QUOTE',
    parentId,
    id
})

export const watchUnsaveQuote = (parentId,id) => ({
    type: 'WATCH_UNSAVE_QUOTE',
    parentId,
    id
})

export const setFavourites = (quoteIds) => ({
    type: 'SET_FAVOURITES',
    quoteIds
})

