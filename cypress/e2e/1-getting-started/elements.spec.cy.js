/// <reference types = "cypress"/>

describe('work with basic elements', () => {
    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.screenshot('HomePage')
        })
           it('Text', () => {
            cy.get("body").should('contain', 'Cuidado')
            cy.get("span").should('contain', 'Cuidado')
            cy.get(".facilAchar").should('contain', 'Cuidado')
            cy.get(".facilAchar").should('have.text', 'Cuidado onde clica, muitas armadilhas...')

            })

            it('link',()=>{
            cy.get("a").should('contain', 'Voltar')
            .click
            cy.screenshot('Voltou!')
            })
        })
