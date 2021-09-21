const FeedItem = (props) => {
    const { id, post, gif, removeFeed} = props

    const handleRemove = (e) => {
        const conf = window.confirm('Are you sure?')
        if(conf){
            removeFeed(id)
        }
    }

    return (
        <div className="card mt-3 w-100 p-3">
            <div className=" d-flex justify-content-between">
                <h5 className="fs-3">{post}</h5>                
                <button onClick={handleRemove} className="btn btn-sm btn-warning" style={{float:'right', height:'41px'}}>Remove</button>
            </div>

            { gif && <img src={gif} width="30%" height="30%" alt="gif "/> }

        </div>
    )
}

export default FeedItem