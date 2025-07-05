import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import COD3R2 from './components/COD3R2'
import CodersActivities from './components/CodersActivities'
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'

import './styles/custom.scss';

const App = () => {
  return (
    <div className = "app-container">
      <div className="vertical-line left-line"></div>
      <div className="vertical-line right-line"></div>
      <div className="horizontal-line top-line"></div>
      <div className="horizontal-line top-line-double"></div>

      {/* from top */}
      <div className="horizontal-line section-separator-line-1"></div>
      <div className="horizontal-line section-separator-line-2"></div>

      <div className="horizontal-line bottom-line"></div>
      <div className="horizontal-line bottom-line-double"></div>

      {/* from bottom */}
      <div className="horizontal-line section-separator-line-3"></div>
      <div className="horizontal-line section-separator-line-4"></div>
      <div className="horizontal-line section-separator-line-5"></div>

      <div className="container">
        <Navbar />
        <Header />
      </div>
      <AboutUs />
      <JoinUs/>
      <CodersActivities />
      <COD3R2/>
      <ContactUs/>
      <Footer/>
    </div>
  );
}



export default App
