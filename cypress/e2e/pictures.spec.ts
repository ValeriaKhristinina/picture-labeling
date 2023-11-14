// https://on.cypress.io/api

const API_URL = `${Cypress.env('API_URL')}?key=*`;
describe('Pictures', () => {
  beforeEach(() => {
    cy.intercept(
      'GET',
      API_URL,
      { fixture: 'pictures.json' }
    )
    cy.visit('/')
  })

  it('Succesfuly render page', () => {
    cy.get('.picture-card').should('have.length', 2)
    cy.get('.image-label').contains('NOLABEL')
    cy.get('.image-label').contains('apple')
    cy.get('.pages').contains('Page 1 of 2')
  })

  it('Should filter pictures and return empty response', () => {
    cy.intercept(
      'GET',
      API_URL,
      { fixture: 'emptyPictures.json' }
    )

    cy.get('.picture-card').should('have.length', 2)
    cy.get('.filter-input').type('mandarijn')
    cy.get('[data-cy="filter"]').click()
    cy.get('.picture-card').should('have.length', 0)
  })
})
