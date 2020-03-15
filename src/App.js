import React from 'react'
import backgroundTop from './images/background-top.png'
import logo from './images/logo.svg'

import ContactForm from './components/contact-form'

const styles = {
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
    minWidth: 1000,
    height: '100vh'
  },
  logo: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    minWidth: 300
  },
  homeSection: {
    position: 'relative',
    overflow: 'hidden',
    height: '100vh',
  }
}


function App() {
  return (
    <div className="App">
      <section style={styles.homeSection}>
        <img src={backgroundTop} alt="background-top" style={styles.backgroundTop} />
        <img src={logo} alt="logo" style={styles.logo} />
      </section>

      <section>
        {/* <ContactForm /> */}
      </section>
      
    </div>
  )
}

export default App;
