import React from 'react'
import backgroundTop from './images/background-top.svg'
import logo from './images/logo.svg'

const styles = {
  backgroundTop: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100vw',
  },
  logo: {
    position: 'absolute',
    top: '20%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '40%',
    minWidth: 300
  }
}


function App() {
  return (
    <div className="App">
      <img src={backgroundTop} alt="background-top" style={styles.backgroundTop}/>
      <img src={logo} alt="logo" style={styles.logo}/>
    </div>
  )
}

export default App;
