import React from 'react'
import { useHistory } from 'react-router-dom'
import { Box, Typography, Button, Container } from "@material-ui/core";
import mat from './img/mat.jpeg'

const AboutPage = () => {
  const history = useHistory()
  return (
    <>
    <Container sx={{ mt: '1rem', maxWidth: '100vw', minHeight: 'auto'}}>

    <Box spacing={1} marginTop="30px" textAlign="center">
      <Typography variant="h3">Om oss</Typography>
      <img className='mat' src={mat} alt="Mat" />
      <Typography style={{ margin: '2rem' }} variant="body1">Välkommen att besöka våra restaurang Hemlagat Mölndal. Hos oss kan du äta Möndals största pizza. På Hemlagat Pizzeria kan du välja från vårmeny pizzor och hamburgare. Självklart kan du även beställa sallader, lasagne eller kebab. Du kan också äta god och fräsch mat i vår restaurang som ligger i Möndal. Hemlagat erbjuder också en lunch rätter varje vardag. Vi är ett familjeföretag som slog upp portarna i Möndal i september 2021 då vi startade Hemlagat. Vi har alltid satsat på kvalitet och att det ska vara rent och fräscht när du besöker våra restauranger. För oss är varje kund lika viktig det spelar ingen roll om du vill beställa lunch till tjugo hungriga medarbetare eller om du bara vill ha lite kvällsmat i slutet av veckan till dig själv.

Varmt välkommen att besöka oss!</Typography>
    </Box>
    <Box style={{display: "flex", justifyContent: "space-evenly" }}>
      <Button onClick={() => history.push('/store')} variant="outlined">Gå till Menyn!</Button> 
      <Button onClick={() => history.push('/')} variant="outlined">Veckans Erbjudanden</Button>
    </Box>
    </Container>
    </>
  )
}

export default AboutPage