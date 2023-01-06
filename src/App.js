import Web3 from "web3";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider"
import flower from './images/category-flower.png'
import candle from './images/category-candle1.png'
import envelope from './images/category-card.png'
import fb from './images/fb.png'
import ins from './images/Instagram.png'
import switter from './images/Switter.png'
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
      <div class="header-right">
            <span class="icon"><i class="fas fa-thin fa-magnifying-glass"></i></span>
            <input type="search" id="search" placeholder="Search..."/>
      </div>
      <div class="accountWallet">
        <div className="balance">
        <span>
            Accounts Address:
        </span>
        {
          account ? " " + account : " Account not connected"
        }
        
          <br></br>
          <span>Current Balance:</span> <b></b>
        </div>
        <button className="connectwallet" onDoubleClick={()=>
            Web3Api.provider.request({method: "eth_requestAccounts"})
          }>Connect wallet</button>
        <button className="pay">Pay</button>
        <button className="withdraw">Withdraw</button>
      </div>
      <div className="header">
        
        <h1>Souvenir</h1>
        
      </div>
      <div id="Menu">
        <div>
            <ul>
                <li><a href="#.html">Home</a></li>
                <li><a href="#.html">Product</a></li>
                <li><a href="#.html">Service</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="#.html">About</a></li>
                <li><a href="#.html">Contact</a></li>
            </ul>
        </div>
    </div>
    <h2>Product Category</h2>
    <div className="Tagname">
      <p>Flower</p>
      <div className="productpic">
        <div className="product">
        <img src={flower} alt="product-pic"/>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        </div>
        <div className="product">
        <img src={flower} alt="product-pic"/>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        </div>
        <div className="product">
        <img src={flower} alt="product-pic"/>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        </div>
        <div className="product">
        <img src={flower} alt="product-pic"/>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        </div>
        <div className="product">
        <img src={flower} alt="product-pic"/>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        </div>
      </div>
    </div>
    <div className="Tagname">
      <p>Candle</p>
      <div className="productpic">
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        </div>
      </div>
    </div>
    <div className="Tagname">
      <p>Envelope</p>
      <div className="productpic">
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        </div>
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        </div>
      </div>
    </div>

    <div class="Footer">
        <div class="Fo-nav">
            <h1>Sourvenir</h1>
            <table>
                <tr>
                    <td><a href="#.html">Home</a></td>
                    <td><a href="#.html">Product</a></td>
                    <td><a href="#.html">Service</a></td>
                </tr>
                <tr>
                    <td><a href="#.html">About</a></td>
                    <td><a href="#.html">Contact</a></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <div id="Social">
            <a href="#.html"><img src={fb} alt="product-pic"/></a>
            <a href="#.html"><img src={ins} alt="product-pic"/></a>
            <a href="#.html"><img src={switter} alt="product-pic"/></a>
        </div>
    </div>
    </div>
  );
  }

export default App;
