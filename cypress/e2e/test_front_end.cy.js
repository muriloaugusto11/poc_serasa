describe('Portal Talking About Testing', () => {
  beforeEach(() => {
    cy.visit('https://talkingabouttesting.com/')
  })

  it('Verifica o título do site', () => {
    cy.title().should('be.equal', 'TALKING ABOUT TESTING – Tudo sobre engenharia de software com foco em teste de software, automação de testes e qualidade de software. Aprenda boas práticas para a escrita e execução de testes automatizados, além de como evoluir na carreira como tester/QA. Por Walmyr Filho')
  })

  it('Navegando no Site tt e acessar sites redirecionados pós click', () => {
    cy.get('#menu-item-294 > a').click()
    cy.get('#menu-item-406 > a').click()
    cy.get('#subscribe-field-2').type("murilo@gmail.com", { delay: 7 })
    cy.get('#subscribe-blog-2 > #subscribe-submit > .wp-block-button__link').click()

    cy.get('#post-403 > div > div > p:nth-child(3) > a:nth-child(1)')
      .invoke('removeAttr', 'target')
      .click()
    })
})

describe('Portal Cypress', () => {
  beforeEach(() => {
    cy.visit('https://www.cypress.io/')
  })

  it('Verifica o título do Site cp', () => {
    cy.title().should('be.equal', 'JavaScript Web Testing and Component Testing Framework | cypress.io')
  })

  it('Acessando Documentação Cypress', () => {
    cy.get('.osano-cm-accept').click()

    cy.wait(5000)

    cy.get('#dropdownDocs').click()
  })
})

describe('Portal Formulário DEMO', () => {
  beforeEach(() => {
    cy.visit('https://fluentforms.com/forms/product-order-form/')
  })

  it('Acessando o Formulário', () => {
    cy.get(':nth-child(6) > .ff-el-input--label > label').should('be.visible')
    cy.get('#input_radio_b4b933545c55452fc0d3969cb689c58f').click()
    cy.get('.ff-el-form-top > .ff-el-input--label > label').should('be.visible')
    cy.get('#ff_8_input_text').type('103020', { delay: 7 })
    cy.get(':nth-child(8) > .ff-el-input--label > label').should('be.visible')
    cy.get('#ff_8_numeric-field').type('7', { delay: 7 })

    cy.get('#ff_8_dropdown')
      .select('M')
      .should('have.value', 'M')

    cy.get(':nth-child(9) > .ff-el-input--label > label').should('be.visible')
    cy.get('#checkbox_8bd8d62f61c30216627aca977f9794cb').click().get('#checkbox_796e977c83beb9611a4cfeb70129820e').click()
    cy.get(':nth-child(2) > :nth-child(1) > .ff-el-group > .ff-el-input--label > label').should('be.visible')
    cy.get('#ff_8_address1_city_').type('Brasília', { delay: 7 })
    cy.get(':nth-child(1) > :nth-child(2) > .ff-el-group > .ff-el-input--label > label').should('be.visible')
    cy.get('.ff-text-left > .ff-btn').click()
    cy.get('.error').should('be.visible')
    cy.get('#ff_8_address1_address_line_2_').type('61999914959', { delay: 7 })
    cy.get('.ff-text-left > .ff-btn').click()
  })
})

describe('Portal Gmail Registrar', () => {
  beforeEach(() => {
    cy.visit('encurtador.com.br/flp13')
  })

  it('Verifica o título do site', () => {
    cy.title().should('be.equal', 'Criar sua Conta do Google')
  })

  it('Validando campos imput', () => {
    cy.get('#firstName').type('Murilo', { delay: 7 })
    cy.get('#lastName').type('Augusto', { delay: 7 })
    cy.get('#username').type('mmrrll00102930293', { delay: 7 })
    cy.get('.VfPpkd-muHVFf-bMcfAe').click()
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('111', { delay: 7 })
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').type('111', { delay: 7 })
    cy.get('#accountDetailsNext > div > button > span').click()
    cy.get('[jsname="B34EJ"] > span').should('be.visible').contains('Use 8 caracteres ou mais para sua senha')
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('11111111', { delay: 7 })
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('11111111', { delay: 7 })
    cy.get('#accountDetailsNext > div > button > span').click()
    cy.get('[jsname="B34EJ"] > span').should('be.visible').contains('Escolha uma senha mais segura. Use uma combinação de letras, números e símbolos.')
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('11111111', { delay: 7 })
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('22222222', { delay: 7 })
    cy.get('#accountDetailsNext > div > button > span').click()
    cy.get('[jsname="B34EJ"] > span').should('be.visible').contains('As senhas não são iguais. Tente novamente')
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear()
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear()
    cy.get('#accountDetailsNext > div > button > span').click()
    cy.get('[jsname="B34EJ"] > span').should('be.visible').contains('Digite uma senha')
    cy.get('#passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('As91312341!', { delay: 7 })
    cy.get('#confirm-passwd > div.aCsJod.oJeWuf > div > div.Xb9hP > input').clear().type('As91312341!', { delay: 7 })
    cy.get('#accountDetailsNext > div > button > span').click()
  })

  it('Validando login usando custom commands', function () {
    cy.PreencherCadGmailComCustomCommands()
  })

  it('Validando login usando custom commands 2', function () {
    cy.PreencherCadGmailComCustomCommandsPassandoVar('Murilo', 'Augusto', 'mmrrll00102930293', 'As91312341!')
  })

})
