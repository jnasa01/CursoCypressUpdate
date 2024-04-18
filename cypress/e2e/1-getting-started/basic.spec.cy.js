/// <reference types = "cypress"/>

describe('Cypress Basic', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        

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
}) 

it.only('Should find and interact with an element', () => {

    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.screenshot('HomePage')
    
    cy.get('#buttonSimple')
    
        .click()
               .should('have.value', 'Obrigado!')
               cy.screenshot('Obrigado')
    
})

it('Should find and interact with a textarea and digit caracters', () => {

    cy.visit('https://wcaquino.me/cypress/componentes.html')

    cy.get("elementosForm:sugestoes")
        .click()
        .should('set.', 'Thank You')
   
})