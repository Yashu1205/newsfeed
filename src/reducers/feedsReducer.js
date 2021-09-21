import { ADD_FEED } from "../actions/feedsAction";

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

        default:{
            return {...state}
        }
    }
}

export default feedsReducer