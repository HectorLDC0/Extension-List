describe('Toggle test', () => {
    it('Toggle changed', () =>{
        cy.visit('http://localhost:5173/')
        cy.get('#root div:nth-child(2) div.togleWrapper div.toggle').click();
        cy.get('#root div:nth-child(1) > div.togleWrapper > div.toggle').click();
        cy.get('#root button:nth-child(2)').click();
        cy.get('#root button:nth-child(3)').click();
        cy.get('#root div.sun img').click();
        cy.get('#root div:nth-child(1) > div.togleWrapper > button').click();
        cy.get('#root div:nth-child(2) div.togleWrapper button').click();
        cy.get('#root div:nth-child(4) button').click();
        cy.get('#root div.buttonsWrapper button:nth-child(1)').click();
        cy.get('#root button:nth-child(2)').click();
        
    })
} );

