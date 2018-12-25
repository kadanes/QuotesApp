
const defaultState = {
    loading: true,
    error: false,
    data: undefined,
    favourites: [],
    favouritesLoading: true,
}

export default function (state = defaultState, action) {
    switch (action.type){
        case 'SET_QUOTES':
            return {
                ...state,
                loading: false,  
                error: false,
                data: action.data
            }

        case 'SET_ERROR':
            return{
                ...state,
                loading: false,
                error: true
            }

        case 'SAVE_QUOTE':{
            const combinedId = `${action.parentId}_${action.id}`
            
            if (!state.favourites.includes(combinedId)) {
                const favourites = state.favourites.concat(combinedId)
                state = { 
                    ...state,
                    favourites            
                } 
            }
            return { 
                ...state         
            } 
        }

        case 'UNSAVE_QUOTE': {
            const id = action.id
            const parentId = action.parentId
            const combinedId = `${parentId}_${id}`
            const favourites = state.favourites.filter(favId => favId !== combinedId )
            return {
                ...state,
                favourites
            }
        }
        
        case 'SET_FAVOURITES': {
            return {
                ...state,
                favourites: action.quoteIds,
                favouritesLoading: false
            }
        }
        default: 
            return state
    }
}

export const getFavourites = (state) => {
    return state.favourites
}

export const getFavouriteQuotes = (state) => {
   return state.favourites.map(favouriteId => {
        var [parentId, id] = favouriteId.split('_')
        return {
            ...state.data[parentId].quotes[id],
            category: state.data[parentId].category,
            parentId
        }
   })
}