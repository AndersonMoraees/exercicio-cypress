/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit("register.html")
  });

  it.only('Deve cadastrar um novo usuário com sucesso', () => {
    cy.get('#name').type('oi bb')
    cy.get('#email').type('email4@email.com')
    cy.get('#phone').type('85999999999')
    cy.get('#password').type('senha@123')
    cy.get('#confirm-password').type('senha@123')
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
    //Resultado esperado
    cy.get('#user-name').should('contain', 'oi bb')
  });
});

