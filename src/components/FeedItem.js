const FeedItem = (props) => {
    const { post, gif} = props

    return (
        <div className="card mt-3 w-100 p-3">
            <h5 className="card-title">{post}</h5>
            { gif && <img src={gif} width="30%" height="30%" alt="gif "/> }
        </div>
    )
}

export default FeedItem