describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.login('standard_user','secret_sauce')
    })
        
        it('Agregar productos al carrito',()=>{
//Agrega el primer producto al carrito y verifica que se haya agregado correctamente
        cy.agregarAlCarrito('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','1')
    
//Agrega el segundo producto al carrito y verifica que se haya agregado correctamente
        cy.agregarAlCarrito('sauce-labs-bike-light')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','2')
    

//Hacer click en el carrito, quitar el primer producto del carrito y verifica que se haya quitado correctamente
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','/cart.html')
        cy.get('[data-test="item-quantity"]').should('exist', '2')
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
        cy.get('[data-test="item-quantity"]').should('exist', '1')
    })

})