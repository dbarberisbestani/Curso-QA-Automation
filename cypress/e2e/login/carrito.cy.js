describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
     //Caso 10 
        it('Agregar producto al carrito',()=>{

        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-badge"]').should('be.visible').and('have.text','1')

    })


})