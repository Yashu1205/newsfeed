import { useDispatch, useSelector } from "react-redux"
import { deleteFeed } from "../actions/feedsAction"
import FeedItem from "./FeedItem"

const FeedsList = (props) => {
    const { feeds } = useSelector((state) => state.feeds)
    const dispatch = useDispatch()

    const removeFeed = (id) => {
        dispatch(deleteFeed(id))
    }

    return (
        <div className="mt-5">
            <h2 style={{textAlign:'center'}} className='bg-light py-2'>NewsFeed</h2>
            { feeds.length > 0 ? (
                
                feeds.map(feed => {
                    return (
                        <FeedItem {...feed} key={feed.id} removeFeed={removeFeed}/>
                    )
                })
            ) : (
                <>
                    <h3>No feeds to show</h3>
                    <h4>Add your feeds</h4>
                </>
            )
            }
            

        </div>
    )
}

export default FeedsList