import Web3 from "web3";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider"
function App() {

  const [Web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });
  const [account, setAccount] = useState();

  useEffect( ()=> {
    const getAccount = async ()=> {
      const accounts = await Web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    Web3Api.web3 && getAccount()
  },[Web3Api.web3]);
  useEffect( ()=> {
    const loadProvider = async ()=> {
      const provider = await detectEthereumProvider();
      if (provider) {
        console.log('Ethereum successfully detected!')
        setWeb3Api({
          web3: new Web3(provider),
          provider
        })
      }
    }
    loadProvider()
  }, []);

  return (
    <div className="app">
      <div className="balance">
        Current Balance: <b>10ETH</b>
      </div>
      <button className="pay">Pay</button>
      <button className="withdraw">Withdraw</button>
      <button className="connectwallet" onDoubleClick={()=>
          Web3Api.provider.request({method: "eth_requestAccounts"})
        }>Connect wallet</button>
      <p>
        <b>
          Accounts Address:
        </b>
      {
        account ? " " + account : " Account not connected"
      }
      </p>
    </div>
  );
}

export default App;
