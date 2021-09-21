import { useState } from "react"
import { useDispatch } from "react-redux"
import { addFeeds } from "../actions/feedsAction"
import { startGetTrendingGifs } from "../actions/gifsAction"
import GifSearch from "./GifSearch"
import '../styles/feeds.css'

const AddFeed = (props) => {
    const [message, setMessage] = useState('')
    const [gif, setGif] = useState('')
    const [showGif, setShowGif] = useState(false)
    const [disableSubmit, setDisableSubmit] = useState(true)
    const dispatch = useDispatch()
 
    const handleChange = (e) => {
        setMessage(e.target.value)
        if(e.target.value){
            setDisableSubmit(false)
        } else{
            setDisableSubmit(true)
        }
    }

    const handleShowGif = (e) => {
        e.preventDefault()
        const flag = showGif ? false : true
        setShowGif(!showGif)
        if(flag){
            dispatch(startGetTrendingGifs())
        }
    }

    const addGifToPost = (gifSource) => {
        setGif(gifSource)
        setDisableSubmit(false)
        setShowGif(!showGif)
    }

    const removeGif = (e) => {
        e.preventDefault()
        setGif('')
        setDisableSubmit(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id: new Date(),
            post: message,
            gif: gif 
        }

        const resetForm = () => {
            setMessage('')
            setGif('')
            setDisableSubmit(true)
        }
        dispatch(addFeeds(formData, resetForm))

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <div id="feedInput">

                <textarea value={message} onChange={handleChange} className="p-3 w-100"
                        placeholder="What's on your mind?"
                        style={{resize:'none', border:'0',fontSize:`${message.length <= 60  ? '20px' : '15px' }`}}></textarea>
                
                { gif && (
                        <div className="text-center gif" style={{overflowY:'auto', height:'150px', position:'relative'}}>
                            <img src={gif} alt="" width="100%"/> 
                            <button className="btn btn-small" onClick={removeGif}>X</button><br/>
                        </div>
                )}

            </div>
            <div className="add-gif p-2 w-25" style={{cursor:'pointer', textAlign:'center'}}  onClick={handleShowGif} >
                <span>
                    <strong>Add GIF</strong>
                </span><br/>
            </div>

            {
                showGif && <GifSearch addGifToPost={addGifToPost}/>
            }
        
            <input type="submit" value="submit" className="btn btn-success btn-md mt-2" 
                   style={{width:'500px'}} 
                    disabled={disableSubmit}
                   />
        </form>
            
        </>
    )
} 

export default AddFeed