Cypress.Commands.add('PreencherCadGmailComCustomCommands', function() {
    cy.get('#firstName').type('Murilo')
    cy.get('#lastName').type('Augusto')
    cy.get('#username').type('mmrrll00102930293')
    cy.get('.VfPpkd-muHVFf-bMcfAe').click()
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('As91312341!')
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('As91312341!')
    cy.get('#accountDetailsNext > div > button > span').click()
})

Cypress.Commands.add('PreencherCadGmailComCustomCommandsPassandoVar', function(nome, sobrenome, user, senha) {
    cy.get('#firstName').type(nome)
    cy.get('#lastName').type(sobrenome)
    cy.get('#username').type(user)
    cy.get('.VfPpkd-muHVFf-bMcfAe').click()
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type(senha)
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type(senha)
    cy.get('#accountDetailsNext > div > button > span').click()
})