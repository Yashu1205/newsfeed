import FeedsList from './FeedsList'
import AddFeed from './AddFeed'

const FeedsContainer = () => {    

    return(
        <div className="container">
            <header className="text-center py-2 mb-5 ">
                <h2 className="fw-normal">Post Your Feeds</h2>
            </header>
            <AddFeed />
            <FeedsList />
        </div>
    )

}

export default FeedsContainer