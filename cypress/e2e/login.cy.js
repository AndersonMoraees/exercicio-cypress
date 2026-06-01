/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {
    beforeEach(() => {
        cy.visit("login.html")
    });

    it('Deve logar com sucesso', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        //Resultado esperado Login bem-sucedido
        cy.get('.fw-bold').should('contain', 'Usuário Padrão')

    });
    it('Tentativa de Login sem email', () => {
        cy.get('#password').type('user123')
        cy.get('#login-btn').click()
        //Resultado esperado valida o campo de email com erro
        cy.get(':nth-child(1) > .invalid-feedback').should('contain', 'Por favor, insira um email válido.')
    });
    it('Tentativa de Login sem senha', () => {
        cy.get('#email').type('usuario@teste.com')
        cy.get('#login-btn').click()
        // Resultado esperado: valida o campo de senha com erro
        cy.get('#password').should('have.class', 'is-invalid')

    });


});