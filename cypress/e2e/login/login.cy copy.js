describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

     //Caso 5.0
     it('Login exitoso',()=>{
        // cy.log('test 1') 
        cy.get('[data-test="username"]').type('standard_user')
        cy.get('[data-test="password"]').type('secret_sauce')
        cy.get('[data-test="login-button"]').click()

        cy.url().should('include','/inventory.html')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').should('be.visible').click()
    })




})