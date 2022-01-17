import { useEffect, useState } from "react";
import Link from "next/link";

// shows list of all their journals
const YourJournals = ({ journal, postCount, account }) => {
  const [journals, setJournals] = useState([]);

  useEffect(() => {
    (async () => {
      if (journal && postCount > 0) {
        // map through each journal and see if the sender is the same as the account
        // the users journals
        let usersJournals = [];
        for (var i = 0; i <= postCount; i++) {
          // get the post
          const currJournal = await journal.methods.posts(i).call();
          // check if the author is the same as the account
          if (currJournal.author.toLowerCase() === account.toLowerCase()) {
            // if it is, push it to the users journals
            usersJournals.push(currJournal);
          }
        }
        // make the journales the users journals
        setJournals(usersJournals);
        console.log(usersJournals);
      }
    })();
  }, [journal, postCount]);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
        {journals.map((item, index) => {
          const date = new Date(item.timestamp * 1000);

          return (
            <div className="flex" key={index}>
              <div className="pt-1 mr-6 text-center">
                <div className="px-2 pb-1 mb-1 border-b border-gray-400">
                  <p className="text-sm text-blue-gray-700">
                    {date
                      .toLocaleString("default", { month: "short" })
                      .toUpperCase()}
                  </p>
                </div>
                <div className="px-2">
                  {/* TODO: double check that the day is accurate */}
                  <p className="text-lg font-bold">{date.getDay()}</p>
                </div>
              </div>
              <div>
                <div className="mb-2">
                  <a
                    href="/"
                    className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                    title="Delevopment"
                  >
                    Sentiment - {item.sentimentRating}
                  </a>
                </div>
                <div className="mb-2">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    {item.title}
                  </a>
                </div>
                <p className="mb-5 text-gray-700">
                  {item.content.substring(0, 100)}...
                </p>
                <div className="flex items-center">
                  <div>
                    <p className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400">
                      {item.sentiment}
                    </p>
                    <Link href={{ pathname: "/post", query: { id: item.id } }}>
                      <a className="text-sm font-medium leading-4 text-gray-600">
                        View More
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default YourJournals;
