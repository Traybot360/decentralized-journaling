import { useState, useEffect } from "react";
import Web3 from "web3";

import Journal from "../../../truffle/build/contracts/Journal.json";

const useLoadWeb3 = () => {
  const [account, setAccount] = useState(null);
  const [postCount, setPostCount] = useState(null);
  const [journal, setJournal] = useState(null);
  // connect to the metamask provider and add web3 to the window
  const injectWeb3 = async () => {
    if (window.ethereum) {
      try {
        // load accounts and save the first one
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        setAccount(accounts[0]);
        window.web3 = new Web3(window.ethereum);
      } catch (error) {
        alert(error);
      }
    }
  };
  // load the journal contract
  const loadContract = async () => {
    const web3 = window.web3;
    // get the network id
    const networkId = await web3.eth.net.getId();
    const networkData = Journal.networks[networkId];
    if (networkData) {
      const journal = new web3.eth.Contract(Journal.abi, networkData.address);
      setJournal(journal);

      const postCount = await journal.methods.postCount().call();
      setPostCount(postCount);
    } else {
      alert("Contract not deployed");
    }
  };

  useEffect(() => {
    (async () => {
      await injectWeb3();
      await loadContract();
    })();
  }, []);

  return { account, postCount, journal };
};

export default useLoadWeb3;
