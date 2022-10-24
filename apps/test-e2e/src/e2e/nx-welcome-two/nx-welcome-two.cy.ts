describe('test: NxWelcomeTwo component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcometwo--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to NxWelcomeTwo!');
    });
});
