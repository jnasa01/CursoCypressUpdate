// <reference types = "cypress"/>

describe('Esperas...', () => {
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.screenshot('HomePage')
        })

        beforeEach(() =>{
            cy.reload()
            })

    it('Deve aguardar elemento estar disponível', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo').should('exist')
            .type('Funciona!')
            //.should('have.text', 'Funciona!')
    })

    it('Deve fazer Retrys', () => {
        cy.get('#novoCampo').should('not.exist')
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('not.exist')
        cy.get('#novoCampo')
            //.should('not.exist')
            .should('exist')
            .type('Funciona!')
    })

    it('Uso do Find', () => {
        cy.get('#buttonList')
            .click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        //cy.get('#lista li')
        //    .find('span')
        //    .should('contain', 'Item 2')
        cy.get('#lista li span')
        .should('contain', 'Item 2')

    })

    it('Uso do Find com DOM', () => {
        cy.get('#buttonListDOM')
            .click()
        cy.get('#lista li')
            .find('span')
            .should('contain', 'Item 1')
        
        // cy.get('#lista li')
        //     .find('span')
        //     .should('contain', 'Item 2')
        cy.get('#lista li span')
           .should('contain', 'Item 2')

    })

    it.only('Uso do Timeout', () => {
        cy.get('#buttonDelay').click()
        cy.get('#novoCampo').should('exist')

    })

})