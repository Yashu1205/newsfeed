
export const GET_FEEDS = 'GET_FEEDS' 
export const ADD_FEED = 'ADD_FEED'
export const DELETE_FEED = 'DELETE_FEED'

export const getFeeds = () => {
    return {
        type: GET_FEEDS
    }
}

export const deleteFeed = (id) => {
    return{
        type: DELETE_FEED,
        payload: id
    }
}

export const addFeeds = (newFeed, resetForm) => {
    resetForm()
    return{
        type: ADD_FEED,
        payload: newFeed
    }
}