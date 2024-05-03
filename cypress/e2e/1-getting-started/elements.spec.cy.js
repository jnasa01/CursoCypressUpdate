/// <reference types = "cypress"/>

describe('work with basic elements', () => {
    before(() =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        //cy.screenshot('HomePage')
        })

  
    beforeEach(() =>{
        cy.reload()
        })
           it('Text', () => {
            cy.get("body").should('contain', 'Cuidado')
            cy.get("span").should('contain', 'Cuidado')
            cy.get(".facilAchar")
                .should('contain', 'Cuidado')
            cy.get(".facilAchar")
                .should('have.text', 'Cuidado onde clica, muitas armadilhas...')
            })

            it('link',()=>{
            //cy.get("a").click()
            cy.get('[href="#"]')
                 .click()
            cy.get('#resultado')
                .should('have.text', 'Voltou!')
            cy.reload()
            cy.get('#resultado')
                .should('have.not.text', 'Voltou!')
            cy.contains('Voltar').click()
            cy.get('#resultado')
                .should('have.text', 'Voltou!')
                cy.screenshot('Voltou!')
            })

            it('TextFields', () =>{
            cy.get('#formNome')
                .type('Dr Pretinho')
                .should('have.value', 'Dr Pretinho')
            cy.get('[data-cy="dataSobrenome"]')
                .type('Simple The Best56{backspace}{backspace}') // {backspace} apaga o ultimo caracter inserido 
                .should('have.value', 'Simple The Best')
            cy.get('#elementosForm\\:sugestoes')
                .type('Henrique bobão do papai!!!')
                .should('have.value', 'Henrique bobão do papai!!!')

            cy.get('#tabelaUsuarios > :nth-child(2) > :nth-child(1) > :nth-child(6) > input')
                .type('Francisco')
            cy.get(':nth-child(2) > :nth-child(6) > input')
                .type('Mariaz')
                .should('have.value', 'Mariaz')
            cy.get(':nth-child(3) > :nth-child(6) > input')
                .type('USERNAME01')
                .should('have.value', 'USERNAME01')
            cy.get(':nth-child(4) > :nth-child(6) > input')
                .type('USERNAME02')
                .should('have.value', 'USERNAME02')
            cy.get(':nth-child(5) > :nth-child(6) > input')
                .type('USERNAME03')
                .should('have.value', 'USERNAME03')
            cy.get('#elementosForm\\:sugestoes')
                .clear()
                .type('Erro{selectall}Acerto', {delay:100})
                .should('have.value', 'Acerto')        
        })

    it('RadioButton', ()=>{
        cy.get('#formSexoFem')
            .click()
            .should('be.checked') // está selecionado
        cy.get('#formSexoMasc')
            .should('not.be.checked')
        cy.get('[name=formSexo]')
            .should('have.length', 2)
        })

    

    it('CheckBox', () => {
        cy.get('#formComidaVegetariana')
        .click()
        cy.get('[name=formComidaFavorita]')
            .click({ multiple: true }) // seleciona varios checkboxs
            .should('have.length', 4) 
        cy.get('#formComidaVegetariana')
            .should('not.be.checked')
        cy.get('#formComidaCarne')
            .should('be.checked')
    })

    it('ComboBox', () => {
        cy.get('[data-test="dataEscolaridade"]')
            .select('2o grau completo')
            .should('have.value', '2graucomp')

        cy.get('[data-test="dataEscolaridade"]')
            .select('1graucomp')
            .should('have.value', '1graucomp')
            //TODO validar as opções do combo
    
    })

   it.only('ComboBox Multiplo', () => {
        cy.get('[data-testid="dataEsportes"]')
            .select(['natacao', 'Corrida'])
            //.should('have.value',  [ 'natacao', 'Corrida' ])
            //TODO validar as opções do combo Multiplo 
    })

   

})
        describe('Externo', () => {
            before(() =>{
                cy.visit('https://wcaquino.me/cypress/frame.html')
                cy.screenshot('HomePage')
            })

            it('Externo', ()=>{

            })
})