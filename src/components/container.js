import styled from 'styled-components'

const Container = styled.div`
  max-width: 1160px;
  margin-right: auto;
  margin-left: auto;

  @media only screen and (max-width: 1199px) {
    max-width:960px
  }

  @media only screen and (max-width: 991px) {
    max-width:720px
  }

  @media only screen and (max-width: 767px) {
    max-width:540px
  }

  @media only screen and (max-width: 575px) {
    max-width:100%;
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

export default Container