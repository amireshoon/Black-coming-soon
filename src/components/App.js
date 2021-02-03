import React from 'react'
import styled from 'styled-components'
import handemoji from '../images/hand_wave.png'
function App() {
  return (
    <Container>
      <h1>
        Hi there <img src={handemoji} alt="hand waving emoji"/><br></br>
        This site will release soon
        <p><a href="https://github.com/amireshoon/Black/blob/master/README.md">Learn more</a> - <a href="https://github.com/amireshoon/Black">You know react? Contribute</a></p>
      </h1>
    </Container>
  )
}

const Container = styled.div`
width:100%;
height:100%;
background-color: #000;
display:flex;
position: absolute;
left:0;
right:0;
top:0;
bottom:0;
justify-content: center;
align-items: center;
h1 {
  color: white;
  font-weight: 900;
  font-size:80px;
  letter-spacing: -.04em;
  width: 70%;
  text-align: center;
}

p {
  font-size: 18px;
  letter-spacing: 0;
  font-weight: 400;
}
`

export default App
