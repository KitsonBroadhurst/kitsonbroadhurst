import React from "react"
import styled from 'styled-components'
import Layout from '../components/layout'
import Button from '../components/button'
import Container from '../components/container'

const Hero = styled.div`
  .hero__inner {
    position: relative;
    padding-top: 180px;
    padding-bottom: 465px;
  }

  .hero__content {
    max-width: 460px;
  }
`

export default function Home(props) {
  console.log('props is ', props)
  return (
    <Layout>
      <Container>
        <Hero>
          <div className="hero__inner">
            <div className="hero__content">
              <h1>Hey, I'm Kitson</h1>
              <p>I'm a frontend developer. I love to code. I build web apps and websites with JavaScript.</p>
              <Button>Tell me more!</Button>
            </div>
          </div>
        </Hero>
      </Container>
    </Layout>
  )
}
