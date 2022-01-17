import Link from "next/link";

const Landing = () => (
  <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <div>
        <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
          Brand new
        </p>
      </div>
      <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span className="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="3071a3ad-db4a-4cbe-ac9a-47850b69e4b7"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7" />
              </pattern>
            </defs>
            <rect
              fill="url(#3071a3ad-db4a-4cbe-ac9a-47850b69e4b7)"
              width="52"
              height="24"
            />
          </svg>
          <span className="relative">The decentralized</span>
        </span>{" "}
        personal journaling app
      </h2>
      <p className="text-base text-gray-700 md:text-lg">
        Personal journaling is a great way to keep track of your thoughts and to
        get a sense of how you are feeling. Sometimes we have insights that
        could help others.
      </p>
    </div>
    <div className="grid max-w-screen-lg gap-8 lg:grid-cols-2 sm:mx-auto">
      <div className="flex flex-col justify-center">
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Global feed + Tipping posts
            </h6>
            <p className="text-sm text-gray-900">
              A community of people sharing their insights and thoughts. You can
              chose to keep your journal private or public.
            </p>
            <hr className="w-full my-6 border-gray-300" />
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Powered by blockchain
            </h6>
            <p className="text-sm text-gray-900">
              Privacy and security should never be a concern. Your journal is
              hosted on the etherium blockchain and every piece of data is
              encrypted. Also, your account is connected to your etherium
              wallet, so your identity stays private unless you post it in a
              public journal.
            </p>
            <hr className="w-full my-6 border-gray-300" />
          </div>
        </div>
        <div className="flex">
          <div className="mr-4">
            <div className="flex items-center justify-center w-10 h-10 mb-3 rounded-full bg-indigo-50">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
          </div>
          <div>
            <h6 className="mb-2 font-semibold leading-5">
              Artificial intelligence + insights
            </h6>
            <p className="text-sm text-gray-900">
              We have artificial intelligence to get a sense of how you're
              feeling in your journals over time. You also get to score your
              journal based on how you feel and see how your emotion is changing
              over time.
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <img
          className="object-cover w-full h-56 col-span-2 rounded shadow-lg"
          src="https://images.unsplash.com/photo-1538045698727-ac45d4365100?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <img
          className="object-cover w-full h-48 rounded shadow-lg"
          src="https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <img
          className="object-cover w-full h-48 rounded shadow-lg"
          src="https://images.unsplash.com/photo-1513666639414-f795d25747a8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80"
          alt=""
        />
      </div>
    </div>
    <div className="text-center mt-10">
      <Link href="/profile">
        <a className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">
          Get started
        </a>
      </Link>
    </div>
  </div>
);

export default Landing;
