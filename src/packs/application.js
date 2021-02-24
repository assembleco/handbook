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

const Hello = props => (
  <Page>Hello {props.name}!</Page>
)

var Page = styled.div`
background: bisque;
height: 80vh;
width: 60vw;
margin: 4rem auto;
padding: 2rem;
box-shadow: 0 0 24px grey;
font-family: sans-serif;
`

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello name="you" />,
    document.body.appendChild(document.createElement('div')),
  )
})
