import { faker } from '@faker-js/faker';

describe('Test Iframe for Heroku', function() {
    it('Test Iframe', () =>{
        cy.visit('https://the-internet.herokuapp.com/iframe')
        const iframe = cy.get('iframe#mce_0_ifr')
            .its('0.contentDocument.body')
            .should('not.be.empty')
            .then(cy.wrap)
        iframe.clear()
            .type(faker.lorem.lines())

    })
})