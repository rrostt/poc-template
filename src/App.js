import React, { Component } from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const apihost = process.env.APIHOST || ''

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background-color: rgb(247,247,247);
  }
`

const AppStyled = styled.div`
  font-size: 36px;
`

class App extends Component {
  constructor (props) {
    super(props)

    this.state = {
      message: 'nothing yet'
    }
  }

  componentDidMount () {
    this.fetchData()
  }

  fetchData () {
    window.fetch(`${apihost}/api/`)
      .then(data => data.text())
      .then(message =>
        this.setState({ message })
      )
  }

  render () {
    return (
      <AppStyled>
        <p>/api/ says: {this.state.message}</p>

        <GlobalStyle />
      </AppStyled>
    )
  }
}

export default App
