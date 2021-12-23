import React from 'react'
import { useHistory } from 'react-router-dom'

const Store = () => {
  const history = useHistory()
  return (
    <>
      <h2>Kontakt</h2>
      <p>Har ni några frågor eller funderingar så är ni välkomna att kontakta oss.</p>
      <button className='button is-primary' onClick={() => history.push('/')}>Tillbaka till startsidan.</button>
    </>
  )
}

export default Store