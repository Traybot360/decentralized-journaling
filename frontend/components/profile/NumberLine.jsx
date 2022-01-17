import { Emoji } from "emoji-mart";

const NumberLine = ({ value, setValue }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-lg w-full">
        <p className="font-sans">How are you feeling?</p>
        <div className="flex flex-row">
          <Emoji emoji=":slightly_frowning_face:" set="apple" size={20} />
          {/* the numbers */}
          <div className="w-full flex justify-between px-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((number) => (
              <p
                key={number}
                style={
                  value === number
                    ? { color: "#42a5f5", borderColor: "#42a5f5" }
                    : {}
                }
                className="hover:text-blue-400 cursor-pointer border-b-2 border-black hover:border-blue-400 px-4"
                onClick={() => setValue(number)}
              >
                {number}
              </p>
            ))}
          </div>
          <Emoji emoji="grinning" set="apple" size={20} />
        </div>
      </div>
    </div>
  );
};

export default NumberLine;
