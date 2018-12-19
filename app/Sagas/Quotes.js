import { put, takeEvery, all, select } from 'redux-saga/effects'
import { setQuotes, setError, saveQuote, unsaveQuote, setFavourites } from '../actions/Quotes'
import {  getFavourites } from '../Reducer/Quotes'
import firebase from 'firebase'
import config from '../Const/FirebaseConfig'
import { AsyncStorage } from "react-native"


function* setQuotesSaga() {

    results = yield firebase.database().ref().once('value').then(function(snapshot){
      var temp =  []
      snapshot.val().forEach((item,i) => {
          temp.push({...item, key: `${i}`})
      });

      return temp
    })
    .catch(err => {
      return undefined
    }) 

    if (results) {
      yield put(setQuotes(results))

      favourites = yield retrieveData('favourites')

      yield put(setFavourites(favourites.split(',')))

    } else {
      yield put(setError()) 
    }
}

function* watchSetQuotes() {
    yield takeEvery('FETCH_QUOTES', setQuotesSaga)
}


function* saveQuoteSaga(action) {
    id = action.id
    parentId = action.parentId
    combinedId = `${parentId}_${id}`
    console.log('SAVE QUOTE ACTION ',action)

    favourites = yield retrieveData('favourites')
    
    if (favourites == undefined) {
      success = yield storeData('favourites',`${parentId}_${id}`)
      if (success) {
        yield put(saveQuote(action.parentId,action.id))
      }
    } else {
      favouritesList = favourites.split(',')
      console.log("Favourites list: ",favouritesList)
      console.log("Combined ID: ",combinedId)
      console.log("Exists? ",!favouritesList.includes(combinedId))
        
      if (!favouritesList.includes(combinedId))
        favourites += `,${combinedId}`
        success = yield storeData('favourites',favourites)
        if (success) {
          yield put(saveQuote(action.parentId,action.id))
        }
    }

}

function* watchSaveQuote() {
    yield takeEvery('WATCH_SAVE_QUOTE', saveQuoteSaga)
}


function* unsaveQuotesSaga(action) {
    id = action.id
    parentId = action.parentId
    combinedId = `${parentId}_${id}`

    var favourites = yield select(getFavourites)
    favourites = favourites.filter(id => id !== combinedId )

    success = yield storeData('favourites',favourites.join(','))
    if (success) {
      yield put(unsaveQuote(action.parentId,action.id))
    }
}

function* watchUnsaveQuote() {
  yield takeEvery('WATCH_UNSAVE_QUOTE', unsaveQuotesSaga)

}
export default function* rootSaga() {
  
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
  
  yield all([
    watchSetQuotes(),
    watchSaveQuote(),
    watchUnsaveQuote()
  ])
}

storeData = async (key,value) => {
  try {
    await AsyncStorage.setItem(key,value);
    return true
  } catch (error) {
    // Error saving data
    return false
  }
}

retrieveData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // We have data!!
      return value
    } else {
      return undefined
    }
   } catch (error) {
     // Error retrieving data
     console.log("Error: ",error);
     return undefined
   }
}