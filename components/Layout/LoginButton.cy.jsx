import React from 'react'
import LoginButton from './LoginButton'

describe('<LoginButton />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<LoginButton />)
  })
})