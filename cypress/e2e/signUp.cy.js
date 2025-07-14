/// <reference types="cypress" />

import { generateUser } from '../support/generate';

describe('Sign Up page', () => {
  before(() => {
    cy.visit('https://conduit.mate.academy/');
  });
  it('should provide an ability to register new account', () => {
    const { email, password, username } = generateUser();

    cy.contains('a', 'Sign up')
      .click();
    cy.get('[placeholder="Username"]')
      .type(username);
    cy.get('[placeholder="Email"]')
      .type(email);
    cy.get('[placeholder="Password"]')
      .type(password);
    cy.contains('button', 'Sign up')
      .click();
    cy.get(`a.nav-link[href="/profile/${username.toLowerCase()}"]`)
      .should('be.visible');
  });
});
