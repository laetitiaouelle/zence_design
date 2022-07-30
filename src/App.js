import { useState } from 'react';
import './App.css';
import pattern from './img/5708208.jpg';
import logo from './img/logo.PNG';

function App() {
  const [isOn, setIsOn]= useState(true)
  return (
    <div className="App">
      <div className="pattern">
          <img src={pattern} alt="Pattern" />
      </div>
      <div className="main">
        <div className="dashbaord">
          <div className="d-main" > 
            <h2 className="title" >
              Dashbaord
            </h2>
            <section className="section1 spacebetween " >
              <div className="card shadow cone">
                <div className="card-main">
                  <span className="title" >
                    Available Balance
                  </span>
                  <div className="is-credit">
                    <span className="title" >
                      Credit
                    </span>
                    <span className={ isOn?" switchLeft main-switch ":"main-switch switchRight"} >
                      <span className="switch-btn shadow2" >

                      </span>
                    </span>
                  </div>
                </div>
                <div className="bloc-amount" >
                  12,234$
                </div>
                <div className="visa-detail spacebetween">
                  <span className="hided-code">
                    **** <span className="last-num" >4532</span>
                  </span>
                  <span className="" ></span>
                </div>
              </div>
              <div className="card ctwo">

              </div>
            </section>
            <section className="section2 spacebetween" >
              <div className="card shadow cone">

              </div>
              <div className="card ctwo">

              </div>
            </section>
            <section className="section3 spacebetween" >
              <div className="card cone">

              </div>
              <div className="card ctwo">

              </div>
            </section>
          </div>
        </div>
        <div className="sidebar shadow" >
          <div className="logoplace" >
            <img src={logo} alt="Logo" />
          </div>
          <div className="userinfo">
            <div className="avatar">

            </div>
            <h2 className="greating" >Welcome back!</h2>
            <h2 className="username" >Taylor Simora</h2>

            <div className="amount">
              <h2>34,321$</h2>
              <h2 className="greating" >Monthly budget</h2>
            </div>
          </div>
          <div className="navbar" >
            <ul>
              <li>
                <a href="#" >
                  <span></span>
                  <span>Dashbaord</span>
                </a>
              </li>
              <li>
                <a href="#" >
                  <span></span>
                  <span>Investments</span>
                </a>
                
              </li>
              <li>
                <a href="#" >
                  <span></span>
                  <span>Transactions</span>
                </a>
              </li>
              <li>
                <a href="#" >
                  <span></span>
                  <span>Wallet</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="signout" >
            <a href="#" >
              
              <span>Sign-out</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
