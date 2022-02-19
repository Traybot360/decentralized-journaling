pragma solidity >=0.4.25 <0.7.0;

contract Journal {
    string public name = "Journal";

    uint256 public postCount = 0; // number of posts
    mapping(uint256 => Post) public posts;
    // post struct that contains the data of a post
    struct Post {
        uint256 id;
        string title;
        string content;
        uint256 timestamp;
        bool isPublished;
        uint256 sentimentRating;
        string sentiment;
        address payable author;
    }

    // event for when a post is published
    event PostCreated(
        uint256 id,
        string title,
        string content,
        uint256 timestamp,
        bool isPublished,
        uint256 sentimentRating,
        string sentiment,
        address payable author
    );
    
    // create & upload a post
    function createPost(
        string memory _title,
        string memory _content,
        uint256 _sentimentRating,
        string memory _sentiment,
        bool _isPublished
    ) public {
        // require that the post is not empty
        require(bytes(_title).length > 0);
        require(bytes(_content).length > 0);
        // make sure the sender is valid
        require(msg.sender != address(0x0));
        // increase the post count
        postCount++;
        // create the post
        Post memory _post;
        _post.id = postCount;
        _post.title = _title;
        _post.content = _content;
        _post.timestamp = now;
        _post.isPublished = _isPublished;
        _post.author = msg.sender;
        _post.sentiment = _sentiment;
        _post.sentimentRating = _sentimentRating;
        posts[postCount] = _post;
        // trigger the event
        emit PostCreated(
            _post.id,
            _post.title,
            _post.content,
            _post.timestamp,
            _post.isPublished,
            _post.sentimentRating,
            _post.sentiment,
            _post.author
        );
    }
}
