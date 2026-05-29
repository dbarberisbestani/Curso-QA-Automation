describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()
    })
        //Agrega backpack al carrito y verifica que se haya agregado correctamente
        it('Agregar producto al carrito',()=>{

        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','1')
    
        //Agrega Bike light al carrito y verifica que se hayan agregado correctamente ambos productos
        
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','2')
    
        //Agrega onesie al carrito y verifica que se hayan agregado correctamente ambos productos
        
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','3')
    })

})