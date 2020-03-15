import React from 'react'

const styles = {
  sizing: {
    flex: 1,
    minWidth: 300,
    minHeight: 40,
    margin: "20px auto"
  }
}

const Input = props => {
  return (
    <input style={styles.sizing} {...props}/>
  )
}


export default Input