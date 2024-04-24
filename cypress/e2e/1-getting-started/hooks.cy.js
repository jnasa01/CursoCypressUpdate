describe('Hooks', ()=>{
before(()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.screenshot('HomePage')
})
beforeEach(()=>{
    cy.visit('https://wcaquino.me/cypress/componentes.html')
    cy.screenshot('HomePage')
})

after(()=>{
    cy.quit()
    cy.screenshot('EndPage')
})
afterEach(()=>{
    cy.quit()
    cy.screenshot('EndPage')
})

})