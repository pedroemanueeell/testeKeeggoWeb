class CartPageObjects {
    
    validateProdutcCart() {
        cy.get('#menuCart')
            .click()
                .get('a.select.ng-binding')
                    .contains(' SHOPPING CART')
    }
}

export default new CartPageObjects()