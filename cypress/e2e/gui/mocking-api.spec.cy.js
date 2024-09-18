describe('Mocking APi response', function(){
    const user = Cypress.env('username')
    const password = Cypress.env('password')
    beforeEach(() => cy.login(user, password))
    it('mocking response', function(){
        
        cy.intercept(
            'GET',
            'https://90xbti2sk5.execute-api.eu-central-1.amazonaws.com/prod/notes',
            { fixtures: 'example'}
        ).as('getNotes')

        cy.visit('/')
        cy.wait('@getNotes')
    })
})