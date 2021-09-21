import { GET_GIFS } from "../actions/gifsAction"

const gifsInitialValues = {
    data: {
        gifs: []
    }
} 

const gifsReducer = (state = gifsInitialValues.data, action) => {

    switch(action.type){

        case GET_GIFS: {
            return {...state, gifs: action.payload}
        }

        default: {
            return {...state}
        }
    }
} 

export default gifsReducer