import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import AboutUs from './components/AboutUs'
import JoinUs from './components/JoinUs'
import COD3R2 from './components/COD3R2'
import CodersActivities from './components/CodersActivities'
import ContactUs from "./components/ContactUs";
import Footer from './components/Footer'

const App = () => {
  return (
    <>
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
    </>
  );
}



export default App
