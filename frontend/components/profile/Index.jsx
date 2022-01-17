import { useState } from "react";
import useLoadWeb3 from "../hooks/useLoadWeb3";
import useWindow from "../hooks/useWindow";
import NewJournal from "./NewJournal";
import TopSection from "./TopSection";
import YourJournals from "./YourJournals";

const Index = () => {
  const { account, postCount, journal } = useLoadWeb3();
  const [option, setOption] = useState(0);
  const window = useWindow();
  console.log(postCount);

  const options = [
    <YourJournals
      account={account}
      journal={journal}
      postCount={postCount}
      account={account}
    />,
    <NewJournal account={account} journal={journal} />,
    <NewJournal account={account} journal={journal} />,
  ];

  if (window && account) {
    return (
      <div>
        <TopSection option={option} setOption={setOption} />
        {options[option]}
      </div>
    );
  } else {
    return <p>Please connect your metamask account</p>;
  }
};

export default Index;
