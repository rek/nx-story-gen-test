describe('common-ui: CommonUiTwo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=commonuitwo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to CommonUiTwo!');
    });
});
