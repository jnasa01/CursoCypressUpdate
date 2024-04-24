/// <reference types = "cypress"/>

describe('Cypress Basic', () => {
    beforeEach(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.screenshot('HomePage')
    })

        it('Should visit a page and assert title', () =>{
            //const title = cy.title()
            //console.log()

            //cy.pause()

            cy.title().should('be.equal', 'Campo de Treinamento')
            cy.title().should('contain', 'Treinamento')
            //cy.title().debug().should('contain', 'Treinamento') - Utilização do caomando Debug a ser visto no console da execução!

            cy.title()
                .should('be.equal', 'Campo de Treinamento')
                .and('contain', 'Treinamento')
                
                //TODO imprimir o log no console
                //Escrever o log em um campo de texto

        })

        it('Should visit a page and assert button after click', () => {
        
            cy.get('#buttonSimple')
            
                .click()
                    .should('have.value', 'Obrigado!')
                    cy.screenshot('Obrigado')
            
        })

    })

    
