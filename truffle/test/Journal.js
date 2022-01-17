const Journal = artifacts.require("Journal");

contract("Journal", (accounts) => {
  it("deploys with a proper address", async () => {
    const instance = await Journal.deployed();
    const address = await instance.address;
    const faultyAddresses = [0x0, null, undefined, ""];
    // if the index is -1 the  its not in the array, meaning its not faulty
    assert.equal(-1, faultyAddresses.indexOf(address));
  });

  it("defaults to zero posts", async () => {
    const instance = await Journal.deployed();
    const count = await instance.postCount();
    assert.equal(count, 0);
  });

  it("can create a post", async () => {
    const instance = await Journal.deployed();
    await instance.createPost(
      "My first post",
      "This is my first post",
      5,
      "happy",
      true
    );
    const count = await instance.postCount();
    // check if the post count increased by 1
    assert.equal(count, 1);
    // check if the post was created
    const post = await instance.posts(count);
    assert.equal(post.title, "My first post");
    assert.equal(post.content, "This is my first post");
    assert.equal(post.sentimentRating, 5);
    assert.equal(post.sentiment, "happy");
    assert.equal(post.isPublished, true);
  });

  it("can create multiple posts", async () => {
    const instance = await Journal.deployed();
    await instance.createPost(
      "My first post",
      "This is my first post",
      5,
      "happy",
      true
    );
    await instance.createPost(
      "My second post",
      "This is my second post",
      2,
      "sad",
      false
    );
    const count = await instance.postCount();
    // check if the post count increased by 2 (3 posts total)
    assert.equal(count, 3);
    // check if the post was created
    const post = await instance.posts(count);
    assert.equal(post.title, "My second post");
    assert.equal(post.content, "This is my second post");
    assert.equal(post.sentimentRating, 2);
    assert.equal(post.sentiment, "sad");
    assert.equal(post.isPublished, false);
  });

  // check if it can tip a post
  it("can tip a post", async () => {
    const instance = await Journal.deployed();
    // get the old tip amount
    const post = await instance.posts(1);
    // store the authors balance to check if it increased for them
    let authorBalance = await web3.eth.getBalance(post.author);
    authorBalance = new web3.utils.BN(authorBalance);
    // tip the post
    await instance.tipPost(1, {
      from: accounts[1],
      value: web3.utils.toWei("0.1", "ether"),
    });
    console.log(post.tipAmount);
    // get the new authors balance
    let newAuthorBalance = await web3.eth.getBalance(post.author);
    newAuthorBalance = new web3.utils.BN(newAuthorBalance);
    // check if the authors balance increased by 0.1 ether
    assert.equal(
      parseInt(newAuthorBalance),
      parseInt(authorBalance) + parseInt(web3.utils.toWei("0.1", "ether"))
    );
    // check if the post tip amount increased by 0.1 ether
    const updatedPost = await instance.posts(1);
    assert.equal(
      parseInt(updatedPost.tipAmount),
      parseInt(web3.utils.toWei("0.1", "ether"))
    );
  });
});
