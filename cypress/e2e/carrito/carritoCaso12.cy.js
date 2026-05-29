describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.login('standard_user','secret_sauce')
    })
        
        it('Agregar productos al carrito',()=>{
//Agrega el primer producto al carrito y verifica que se haya agregado correctamente
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        cy.get('[data-test="remove-sauce-labs-backpack"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','1')
    
//Agrega el segundo producto al carrito y verifica que se haya agregado correctamente
        cy.url().should('include','/inventory.html')
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="remove-sauce-labs-bike-light"]').should('be.visible').and('contain','Remove')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','2')
    
    })

})