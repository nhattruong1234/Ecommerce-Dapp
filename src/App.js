import Web3 from "web3";
import { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider"
import flower from './images/category-flower.png'
import flower1 from './images/hoathom.png'
import flower2 from './images/hoahuongduong.png'
import flower3 from './images/hoahuongduong1.png'
import flower4 from './images/hoahong.png'
import candle from './images/category-candle1.png'
import candle1 from './images/candle2.png'
import candle2 from './images/candle3.png'
import candle3 from './images/candle4.png'
import candle4 from './images/category-candle.jpg'
import envelope1 from './images/thiep3.png'
import envelope2 from './images/thiep2.jpg'
import envelope3 from './images/thiep1.png'
import envelope4 from './images/mockhoa.png'
import envelope from './images/category-card.png'
import fb from './images/fb.png'
import ins from './images/Instagram.png'
import switter from './images/Switter.png'
// import {loadContract} from "./utils/load-contract";
function App() {

  const [Web3Api, setWeb3Api] = useState({
    provider: null,
    web3: null,
  });
  const [account, setAccount] = useState(null);
  const [balance, setBalance] = useState(null);
  
  useEffect( ()=> {
    const getAccount = async ()=> {
      const accounts = await Web3Api.web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    Web3Api.web3 && getAccount()
  },[Web3Api.web3]);

  useEffect( ()=> {
    const getBalance = async ()=> {
      const {contract, web3} = Web3Api;
      const balance = await web3.eth.getBalance(contract.address);
      setBalance(web3.utils.fromWei(balance, "ether"));
    }
    Web3Api.contract && getBalance()
  },[Web3Api]);

  useEffect( ()=> {
    const loadProvider = async ()=> {
      const provider = await detectEthereumProvider();
      // const contract = await loadContract("Edapp", provider)
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
          <span>Current Balance:</span> <b>{balance}</b> ETH
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
        <p className="user">Handmade Club</p>
        <p className="name">Dry Flower</p>
        <p className="price">0.29 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={flower1} alt="product-pic"/>
        <p className="user">Handmade Shop</p>
        <p className="name">Smell Flower</p>
        <p className="price">0.15 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={flower2} alt="product-pic"/>
        <p className="user">My Gifs</p>
        <p className="name">Knitted Sunflowers</p>
        <p className="price">0.2 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={flower3} alt="product-pic"/>
        <p className="user">Beatiful Life</p>
        <p className="name">Sunflower bouquet</p>
        <p className="price">0.32 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={flower4} alt="product-pic"/>
        <p className="user">Kumori Shop</p>
        <p className="name">Knitted Rose</p>
        <p className="price">0.18 ETH</p>
        <button className="buy">Buy now</button>
        </div>
      </div>
    </div>
    <div className="Tagname">
      <p>Candle</p>
      <div className="productpic">
        <div className="product">
        <img src={candle} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={candle1} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={candle2} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={candle3} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={candle4} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Scented candles</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
      </div>
    </div>
    <div className="Tagname">
      <p>Envelope</p>
      <div className="productpic">
        <div className="product">
        <img src={envelope} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={envelope1} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={envelope2} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={envelope3} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
        </div>
        <div className="product">
        <img src={envelope4} alt="product-pic"/>
        <p className="user">Mutant Alex Club</p>
        <p className="name">Vintage envelope</p>
        <p className="price">0.1 ETH</p>
        <button className="buy">Buy now</button>
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
