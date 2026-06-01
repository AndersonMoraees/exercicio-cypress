/// <reference types="cypress"/>

describe('Funcionalidade: Busca', () => {
    beforeEach(() => {
        cy.visit("catalog.html")
    });
    it('Deve realizar a busca e exibir o livro pesquisado', () => {
        cy.get('#search-input').type('1984')
        cy.get('#results-count').should('contain', '1 de 1')
        cy.get('#filter-description').should('contain', '1984')
        cy.get('.d-grid > .btn-outline-info').click()
        cy.get('#book-title').should('contain', '1984')
        //Resultado esperado: Deve exibir a descrição do livro
    });
    it.only('Pesquisa de livro inexistente', () => {
        cy.get('#search-input').type('1983')
        cy.get('#results-count').should('contain', 'Nenhum livro encontrado')
        //Resultado esperado: Deve exibir a mensagem de Nenhum livro encontrado

    });

});