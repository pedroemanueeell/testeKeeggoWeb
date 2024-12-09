class AccessEnvironmentPageObjects {
    
    accessEnvironment() {
        cy.visit('https://advantageonlineshopping.com/#/')
        .viewport(1920, 1080);   
    }
}

export default new AccessEnvironmentPageObjects