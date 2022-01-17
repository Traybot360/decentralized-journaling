import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";

import NumberLine from "./NumberLine";

const NewJournal = ({ journal, account }) => {
  const [title, setTitle] = useLocalStorageState(
    "postTitle",
    "Enter the title of this journal here!"
  );
  const [content, setContent] = useLocalStorageState(
    "postContent",
    "What's been on your mind?"
  );
  const [sentimentRating, setSentimentRating] = useLocalStorageState(
    "sentimentRating",
    1
  );
  const [publish, setPublish] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const onSubmit = (e) => {
    setLoading(true);
    e.preventDefault();
    console.log({ publish });
    journal.methods
      .createPost(title, content, sentimentRating, "", publish)
      .send({ from: account })
      .on("transactionHash", (hash) => {
        setLoading(false);
      });

    // reset the form
    setTitle("Enter the title of this journal here!");
    setContent("What's been on your mind?");
    setSentimentRating(1);
    setPublish(false);
  };

  return (
    <form
      className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      onSubmit={onSubmit}
    >
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        {today.toDateString()}
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <input
            aria-label="Title"
            value={title}
            required
            onChange={(e) => setTitle(e.target.value)}
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl text-center"
          />
        </div>
        <textarea
          aria-label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="text-base text-gray-700 md:text-lg max-w-lg w-full"
        />
      </div>
      <div className="w-full flex justify-center">
        <label className="text-gray-700 text-center">
          <input
            type="checkbox"
            checked={publish}
            onChange={() => setPublish(!publish)}
          />
          <span className="ml-1">Publish</span>
        </label>
      </div>

      <NumberLine value={sentimentRating} setValue={setSentimentRating} />

      <div className="text-center mt-10">
        <button disabled={loading} type="submit">
          <a className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
            Save
          </a>
        </button>
      </div>
    </form>
  );
};

export default NewJournal;
