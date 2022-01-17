import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import useLoadWeb3 from "../components/hooks/useLoadWeb3";
import Index from "../components/Post/Index";

const Post = () => {
  const router = useRouter();
  const id = router.query.id;

  const { account, postCount, journal } = useLoadWeb3();

  const [post, setPost] = useState({});

  useEffect(() => {
    (async () => {
      if (journal && postCount > 0 && id) {
        // get the journal
        const currJournal = await journal.methods.posts(id).call();
        console.log({ currJournal });
        // if the journal is published or the account is the author, then set it to the post
        if (
          currJournal.isPublished ||
          currJournal.author.toLowerCase() === account.toLowerCase()
        ) {
          setPost(currJournal);
        }
      }
    })();
  }, [journal, postCount]);

  if (!post) {
    return <div>You don't have access to that post :(</div>;
  }

  return <Index post={post} />;
};

export default Post;
