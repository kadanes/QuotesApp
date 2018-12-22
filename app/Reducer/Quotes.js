
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
                error: true,
                data:undefined
            }
        case 'SET_QUOTES': {
            return {
                ...state,
                loading: true,
                error: false,
                data: undefined
                
            }
        }
        case 'SAVE_QUOTE':{
            combinedId = `${action.parentId}_${action.id}`
            favourites = state.favourites.concat(combinedId)
            return {
                ...state,
                favourites            
            } 
        }

        case 'UNSAVE_QUOTE': {
            id = action.id
            parentId = action.parentId
            combinedId = `${parentId}_${id}`
            console.log('UNSAVE QUOTE ',combinedId) 
            favourites = state.favourites.filter(favId => favId !== combinedId )
            return {
                ...state,
                favourites
            }
        }
        
        case 'SET_FAVOURITES': {
            console.log(action.quoteIds)
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