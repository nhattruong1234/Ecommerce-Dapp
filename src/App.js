import Web3 from "web3";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider"
function App() {

  const [Web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });

  useEffect( ()=> {
    const loadProvider = async ()=> {
      const provider = await detectEthereumProvider();
      if (provider) {
        console.log('Ethereum successfully detected!')
        provider.request({method: "eth_requestAccounts"})
        setWeb3Api({
          web3: new Web3(provider),
          provider
        })
      } else {
        console.error("please, Install Metamask")
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
    </div>
  );
}

export default App;
