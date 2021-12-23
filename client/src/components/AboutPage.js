import React from 'react'
import { useHistory } from 'react-router-dom'

const AboutPage = () => {
  const history = useHistory()
  return (
    <>
      <h2>Om oss</h2>
      <p>Hej! Vi är en grupp av 3 elever som studerar på skolan MedieInstitutet i Göteborg. Denna sida är vårt examensarbete och en chans att visa vad vi har lärt oss under kursen.
        Vår ide med denna tjänst är just svensk husmanskost där vi erbjuder hemleverans. 
         </p>
      <button className='button is-primary' onClick={() => history.push('/')}>Tillbaka till startsidan.</button>
    </>
  )
}

export default AboutPage