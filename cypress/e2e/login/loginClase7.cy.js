describe ('Login Sauce Demo', ()=>{

    beforeEach(()=>{
        cy.visit('https://www.saucedemo.com/')
    })


    it('Login exitoso',()=>{
        cy.fixture('example').then((users)=>{
            const example = users.standard_user
            cy.get('[data-test="username"]').type(example.username)
            cy.get('[data-test="password"]').type(example.password)
        })
        cy.get('[data-test="login-button"]').click()

        })

     })
    