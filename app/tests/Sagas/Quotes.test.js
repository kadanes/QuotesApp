import {unsaveQuotesSaga} from '../../Sagas/Quotes'

describe('testing quotes saga',() => {

    it('should unsave quotes',() => {
        const gen = unsaveQuotesSaga({id:0,parentId: 0})
        console.log(gen.next())
    })

})