import  { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import feedsReducer from '../reducers/feedsReducer'
import gifsReducer from '../reducers/gifsReducer'

const configureStore = () => {
    
    const store = createStore(combineReducers({
        gifs: gifsReducer,
        feeds: feedsReducer
    }), applyMiddleware(thunk))

    return store
}

export default configureStore