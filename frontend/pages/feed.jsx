import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";

import useLoadWeb3 from "../components/hooks/useLoadWeb3";

const Post = () => {
  const router = useRouter();
  const id = router.query.id;

  const { account, postCount, journal } = useLoadWeb3();

  const [journals, setJournals] = useState([]);
  const [paginationCounter, setPaginationCounter] = useState(0);

  useEffect(() => {
    (async () => {
      if (journal && postCount > 0) {
        // map through each journal and see if the post is published
        // the users journals
        let published = [];
        for (var i = 0; i <= postCount; i++) {
          // get the post
          const currJournal = await journal.methods.posts(i).call();
          // check if the journal is published
          if (currJournal.isPublished) {
            // if it is, push it to the users journals
            published.push(currJournal);
          }
        }
        // make the journales the users journals
        setJournals(published);
        console.log(published);
      }
    })();
  }, [journal, postCount]);

  if (!journals) {
    return <div>Loading...</div>;
  }

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="mb-10 border-t border-b divide-y">
        {journals
          .slice(0 + 10 * paginationCounter, 10 + 10 * paginationCounter)
          .map((journal, index) => {
            const date = new Date(journal.timestamp * 1000);
            return (
              <div className="grid py-8 sm:grid-cols-4" key={index}>
                <div className="mb-4 sm:mb-0">
                  <div className="space-y-1 text-xs font-semibold tracking-wide uppercase">
                    <a
                      href="/"
                      className="transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                      aria-label="Category"
                    >
                      SENTIMENT - {journal.sentiment}
                    </a>
                    <p className="text-gray-600">{date.toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="sm:col-span-3 lg:col-span-2">
                  <div className="mb-3">
                    <Link
                      href={{ pathname: "/post", query: { id: journal.id } }}
                    >
                      <a
                        aria-label="Article"
                        className="inline-block text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                      >
                        <p className="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                          {journal.title}
                        </p>
                      </a>
                    </Link>
                  </div>
                  <p className="text-gray-700">
                    {journal.content.substring(0, 200)}...
                  </p>
                </div>
              </div>
            );
          })}
      </div>
      <div className="text-center flex justify-between align-baseline">
        <p
          href="/"
          aria-label=""
          onClick={() =>
            paginationCounter > 0 && setPaginationCounter(paginationCounter - 1)
          }
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer"
        >
          <svg
            className="inline-block w-3 ml-2 transform rotate-180"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
          Prev
        </p>
        <p
          href="/"
          aria-label=""
          onClick={() =>
            paginationCounter < Math.floor(journals.length / 10) &&
            setPaginationCounter(paginationCounter + 1)
          }
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800 cursor-pointer"
        >
          Next
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </p>
      </div>
    </div>
  );
};

export default Post;
