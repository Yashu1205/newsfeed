import axios from "axios"

export const GET_GIFS = 'GET_GIFS' 

const apiKey = 'WQIepVEFuH8rI4SeJ2hVGgTbyXbU8cOi'
const trendingUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10&rating=g`
const searchUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=`

export const startGetTrendingGifs = () => {
    return (dispatch) => {

        axios.get(`${trendingUrl}`)
            .then((response) => {
                const result = response.data.data
                dispatch(getGifs(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
    
}

export const startGetSearchGifs = (query) => {
    return (dispatch) => {

        axios.get(`${searchUrl}${query}&limit=20`)
            .then((response) => {
                const result = response.data.data
                dispatch(getGifs(result))
            })
            .catch((error) => {
                alert(error.message)
            })
    }
}

const getGifs = (gifs) => {
    return {
        type: GET_GIFS,
        payload: gifs
    }
}