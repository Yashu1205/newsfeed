
export const GET_FEEDS = 'GET_FEEDS' 
export const ADD_FEED = 'ADD_FEED'

export const getFeeds = () => {
    return {
        type: GET_FEEDS
    }
}

export const addFeeds = (newFeed, resetForm) => {
    resetForm()
    return{
        type: ADD_FEED,
        payload: newFeed
    }
}