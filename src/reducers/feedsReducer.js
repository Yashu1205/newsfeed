import { ADD_FEED, DELETE_FEED } from "../actions/feedsAction";

const localData = localStorage.getItem('feeds') ? JSON.parse(localStorage.getItem('feeds')) : []
const initialFeedsValues = {
    data: {
        feeds: localData
    }
}

const feedsReducer = (state=initialFeedsValues.data, action) => {
    switch(action.type) {
        
        case ADD_FEED:{
            const newFeeds = [action.payload, ...state.feeds ]
            localStorage.setItem('feeds', JSON.stringify(newFeeds))
            return {...state, feeds: newFeeds}
        }

        case DELETE_FEED : {
            const result = state.feeds.filter(feed => feed.id !== action.payload)
            localStorage.setItem('feeds',JSON.stringify(result))
            return {...state, feeds: result}
        }

        default:{
            return {...state}
        }
    }
}

export default feedsReducer