import React, { useState } from 'react'
import Input from './input'

const styles = {
  form: {
    display: 'flex',
    flexDirection: 'column'
  }
}

const inputs = [{
  name: 'firstName',
}, {
  name: 'emailAddress',
  type: 'email'
}, {
  name: 'phoneNumber',
  type: 'tel',
  required: false
}, {
  name: 'message',
  type: 'textArea'
}]

const initialState = inputs.map(({name}) => ({[name]: ''}))

const ContactForm = () => {

  const [formState, setFormState] = useState(initialState)

  const handleChange = ({value}, name) => {
    const updatedState = formState.map(({inputName}) => (
      inputName === name ? {[inputName]: value} : {inputName}
    ))
    setFormState(updatedState)
  }

  return (
    <form style={styles.form} onSubmit={() => console.log("submit")}>
      {inputs.map(({name, ...rest}) => {
        const value = formState[name]

        return (
          <Input
            name={name} 
            value={value} 
            onChange={({target}) => handleChange(target, name)} 
            {...rest}
          />
        )
      })}

      <button type="submit">Submit</button>
      
    </form>
  )
}


export default ContactForm