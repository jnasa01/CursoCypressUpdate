///<reference types = "cypress"/>

describe('Helpers...', () => {
    it.only('Wrap', () => {

        const obj = {nome: 'User', idade: 20}
        expect(obj).to.have.property('nome')
        cy.wrap(obj).should('have.property', 'nome')

         cy.visit('https://wcaquino.me/cypress/componentes.html')
        // cy.get('#formNome').then($el => {
        //     $el.val('Funciona via JQuery')
        //     cy.wrap($el).type('Funciona via Cpress')
        // })

        const promise = new Promise((resolve, reject) => {
            setTimeout( () => {
                resolve(10)
            }, 500)
        })

        cy.get('#buttonSimple').then(() => console.log('Encontrei o Primeiro Botão'))
        promise.then( num = console.log(num))
        cy.get('#buttonList').then(() => console.log('Encontrei o Segundo Botão'))

    })



})