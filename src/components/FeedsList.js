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
            <h3 style={{textAlign:'center'}}>NewsFeed</h3>
            {
                feeds.map(feed => {
                    return (
                        <FeedItem {...feed} key={feed.id} removeFeed={removeFeed}/>
                    )
                })
            }
            

        </div>
    )
}

export default FeedsList