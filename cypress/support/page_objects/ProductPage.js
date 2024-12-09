class ProductPageObjects {
    
    clickSearchProductField() {
        cy.get("#menuSearch")
            .click()
                .wait(2000);   
    }

    inputProductName(productname) {
        cy.get("#autoComplete")
            .type(`${productname}`)
    }

    clickProductName() {
        cy.wait(2000)
            .get('a.product.ng-scope')
                .click()
                    .wait(3000) 
    }

    clickAddCart() {
        cy.contains('button', 'ADD TO CART')
            .click()
    }

    validateSearched() {
        cy.contains('button', 'ADD TO CART')
            .should("be.visible")
    }
}

export default new ProductPageObjects()
