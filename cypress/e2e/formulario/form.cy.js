describe ('Formulario - Academy', ()=>{

    beforeEach(()=>{
        cy.visit('https://cypress-playground.vercel.app/forms')
     })

     it('Formulario buenas practicas',()=>{
        cy.fixture('formRegistro').then((form)=>{
            const formRegistro = form.registroValido
            cy.get('#bp-name').type(formRegistro.nombre)
            cy.get('#bp-email').type(formRegistro.email)
            cy.get('#bp-comments').type(formRegistro.comentarios)
            cy.get('[data-testid="bp-country"]').select(formRegistro.pais)
            cy.get(`[data-testid="bp-gender-${formRegistro.genero}"]`).check(formRegistro.genero)
            //cy.get('[data-testid="bp-interest-testing"]').check().should('be.checked')
            cy.get(`[data-testid="bp-interest-${formRegistro.intereses[0]}"]`).check().should('be.checked')
            //cy.get(`[data-testid="bp-interest-${formRegistro.intereses[1]}"]`).check().should('be.checked')
            //cy.get(`[data-testid="bp-experience-${formRegistro.experiencia}"]`).select(formRegistro.experiencia)
            cy.get(`[data-testid="bp-experience-${formRegistro.experiencia}"]`).check()
            cy.get('[data-testid="bp-birthdate"]').type(formRegistro.fechaNacimiento)
        })
    })

})