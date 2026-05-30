describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.login('standard_user','secret_sauce')
    })
        
        it('Agregar productos al carrito',()=>{
//Agrega el producto al carrito y verifica que se haya agregado correctamente
        cy.agregarAlCarrito('sauce-labs-backpack')
        cy.get('[data-test="shopping-cart-link"]').should('be.visible').and('have.text','1')
    
//Hacer click en el carrito, hacer click en el botón de checkout, sin ingresar los datos del formulario y verificar el mensaje de error correspondiente.
        cy.get('[data-test="shopping-cart-link"]').click()
        cy.url().should('include','/cart.html')
        cy.get('[data-test="item-quantity"]').should('exist', '1')
        cy.get("#checkout").click()
        cy.url().should('include','/checkout-step-one.html')
        cy.get('[data-test="continue"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('have.text','Error: First Name is required')
    })

})