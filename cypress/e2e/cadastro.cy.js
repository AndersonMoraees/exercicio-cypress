/// <reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Cadastro de Usuário', () => {

  beforeEach(() => {
    cy.visit("register.html")
  });

  it.only('Deve cadastrar um novo usuário com sucesso', () => {
    let nome = faker.person.fullName()
    let email = faker.internet.email()
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#phone').type('85999999999')
    cy.get('#password').type('senha@123')
    cy.get('#confirm-password').type('senha@123')
    cy.get('#terms-agreement').click()
    cy.get('#register-btn').click()
    //Resultado esperado
    cy.get('#user-name').should('contain', nome)
  });
});

