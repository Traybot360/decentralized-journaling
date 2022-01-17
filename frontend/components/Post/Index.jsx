import { useState } from "react";
import useLocalStorageState from "use-local-storage-state";
import NumberLine from "../profile/NumberLine";

const Index = ({ post }) => {
  const today = new Date(post.timestamp * 1000);

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        {today.toDateString()}
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <p
            aria-label="Title"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl text-center"
          >
            {post.title}
          </p>
        </div>
        <p
          aria-label="Content"
          className="text-base text-gray-700 md:text-lg max-w-lg w-full"
        >
          {post.content}
        </p>
      </div>
      <div className="w-full flex justify-center">
        <label className="text-gray-700 text-center">
          <input
            type="checkbox"
            checked={post.isPublished}
            onChange={() => {}}
          />
          <span className="ml-1">Publish</span>
        </label>
      </div>

      <NumberLine value={parseInt(post.sentimentRating)} setValue={() => {}} />
    </div>
  );
};

export default Index;
