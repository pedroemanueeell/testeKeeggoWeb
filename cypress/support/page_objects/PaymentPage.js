class PaymentPageObjects {
    
    accessPaymentScreen() {
        cy.get('#checkOutPopUp')
            .click()  
    }

    validateProductsAdd () {
        cy.get('a.select.ng-scope')
            .contains('ORDER PAYMENT')
    }
}

export default new PaymentPageObjects()