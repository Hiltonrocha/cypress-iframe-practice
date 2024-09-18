describe('Demo QA', function(){
    it('Iframe', function(){
        cy.visit('https://demoqa.com/frames')

        const iframe1 = cy.get('[id="frame1"]')
        .its('0.contentDocument.body')
        .should('not.be.empty')
        .then(cy.wrap)

        iframe1.should('have.text', 'This is a sample page')
        cy.getIframeBody('#frame2')
            .should('have.text', 'This is a sample page')
    })
})