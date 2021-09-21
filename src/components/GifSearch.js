import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { startGetSearchGifs } from "../actions/gifsAction"


const GifSearch = (props) => {
    const [query, setQuery] = useState('')
    const dispatch = useDispatch()
    const { gifs } = useSelector((state) => state.gifs)

    const { addGifToPost } = props
    
    const handleChange = (e) => {
        const searchValue = e.target.value
        setQuery(searchValue)
        dispatch(startGetSearchGifs(searchValue))
    }

    const addGif = (e) => {
        e.preventDefault()
        const gifSource = e.target.src
        addGifToPost(gifSource)
    }

    return (
        <div className="card" style={{height: '400px', width: '300px', padding: '5px'}}>
            <input type="text" className="form-control mt-1" name="query" value={query} onChange={handleChange} placeholder="Search gifs"/>
            
            <div className="gif" style={{height: '500px', overflowY:'auto'}}>
                {
                    gifs.length > 0 ? (
                        gifs.map(gif => {
                            return (
                                <img src={gif.images.original.url} width="280px" alt={gif.title}
                                    style={{cursor:'pointer', objectFit:'fill', padding:'5px'}}
                                    key={gif.id}
                                    onClick={addGif}/>
                            )
                        })
                    ) : (
                        <div className="spinner-border ml-5" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default GifSearch