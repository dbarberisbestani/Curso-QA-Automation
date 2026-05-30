describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.login('standard_user','secret_sauce')
    })
        
        it('Agregar productos al carrito',()=>{
//Agrega el producto al carrito y verifica que se haya agregado correctamente
        cy.agregarAlCarrito('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','1')
    
//Hacer click en el carrito, hacer click en el botón de checkout, ingresar los datos del formulario y verificar que se haya completado la compra correctamente.
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','/cart.html')
        cy.get('[data-test="item-quantity"]').should('exist', '1')
        cy.get(id="checkout").click()
        cy.url().should('include','/checkout-step-one.html')
        cy.get('[data-test="firstName"]').type('Juan')
        cy.get('[data-test="lastName"]').type('Perez')
        cy.get('[data-test="postalCode"]').type('5000')
        cy.get('[data-test="continue"]').click()
        cy.url().should('include','/checkout-step-two.html')
        cy.get(id="finish").click()
        cy.url().should('include','/checkout-complete.html')
        cy.get('.complete-header').should('be.visible').and('have.text','Thank you for your order!')
    })

})