import { createStackNavigator } from 'react-navigation'

import QuoteCategories  from '../Components/QuoteCategories'
import QuotesList from '../Components/QuotesList' 

const CategoriesNavigator = createStackNavigator(
    {
        Categories: QuoteCategories,
        Quotes: QuotesList
    }
)


export default CategoriesNavigator