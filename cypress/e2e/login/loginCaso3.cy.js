describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })

    it('Login con campos vacíos',()=>{
        
        cy.get('[data-test="login-button"]').click()
        cy.get('[data-test="error"]').should('be.visible').and('contain','Epic sadface: Username is required')

        
    })

})