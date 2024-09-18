Cypress.Commands.add('login', function(username, password){
    cy.session([username, password], () =>{
        cy.visit('/login')
        cy.get('#email')
            .type(username)
        cy.get('#password')
            .type(password)
        cy.get('button[type="submit"]')
            .should('be.enabled')
            .click()
        cy.contains('Logout').should('be.visible')
    })
})

Cypress.Commands.add('getIframeBody', (iframeSelector) => {
    return cy
      .get(iframeSelector)    // Seleciona o iframe
      .its('0.contentDocument.body')  // Acessa o corpo do conteúdo do iframe
      .should('not.be.empty')  // Verifica se o conteúdo não está vazio
      .then(cy.wrap);          // Envolve o conteúdo para que possamos usar os comandos Cypress
  });

Cypress.Commands.add('fillCreditCard', () => {
    cy.get('#storage')
      .type('1')
    cy.get('#name')
      .type('TEST TESTE')

    cy.getIframeBody('iframe[title="Secure card payment input frame"]') // Substitua pelo seletor correto do iframe
    .find('[name="cardnumber"]')  // Seletor do campo de número do cartão
    .type('4242424242424242')
    
    cy.getIframeBody('iframe[title="Secure card payment input frame"]') // Substitua pelo seletor correto do iframe
    .find('[name="exp-date"]')  // Seletor do campo de número do cartão
    .type('12/30')
    
    cy.getIframeBody('iframe[title="Secure card payment input frame"]') // Substitua pelo seletor correto do iframe
    .find('[name="cvc"]')  // Seletor do campo de número do cartão
    .type('124')

    cy.getIframeBody('iframe[title="Secure card payment input frame"]') // Substitua pelo seletor correto do iframe
    .find('[name="postal"]')  // Seletor do campo de número do cartão
    .type('90032')

    cy.get('button[type="submit"]')
      .click()
  });

