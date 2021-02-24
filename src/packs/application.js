// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import React from 'react'
import ReactDOM from 'react-dom'
import styled from "styled-components"

Rails.start()
Turbolinks.start()
ActiveStorage.start()

class Handbook extends React.Component {
  state = { scope: '' }

  componentDidMount() {
    fetch("/scope")
    .then(response => response.text())
    .then(response => this.setState({ scope: response }))
  }

  render = () => (
    <Book>
      <Page>Hello you!</Page>
      <Page>{this.state.scope}</Page>
    </Book>
  )
}

const Book = styled.div`
height: 40rem;
width: 60rem;
display: flex;
justify-content: space-between;
margin: 4rem auto;
`

var Page = styled.div`
padding: 2rem;
width: 40%;
background: bisque;
box-shadow: 0 0 24px grey;
font-family: sans-serif;
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Handbook />,
    document.body.appendChild(document.createElement('div')),
  )
})
