import { useSelector } from "react-redux"
import FeedItem from "./FeedItem"

const FeedsList = (props) => {
    const { feeds } = useSelector((state) => state.feeds)

    return (
        <div className="mt-5">
            <h3 style={{textAlign:'center'}}>NewsFeed</h3>
            {
                feeds.map(feed => {
                    return (
                        <FeedItem {...feed} key={feed.id}/>
                    )
                })
            }
            

        </div>
    )
}

export default FeedsList