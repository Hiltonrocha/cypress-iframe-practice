describe('template spec', () => {
  const user = Cypress.env('username')
  const password = Cypress.env('password')
  it('passes', () => {
    cy.login(user, password)
    cy.visit('/settings')
    cy.fillCreditCard()

  })
})