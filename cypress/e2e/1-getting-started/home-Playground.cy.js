//Primera prueba de Cypress
describe('My First Test', () => {
  it('Visits the homepage', () => {
    cy.visit('https://cypress-playground.vercel.app/forms')
    cy.get('[data-testid="bp-name"]').type('Diego')
  })
})