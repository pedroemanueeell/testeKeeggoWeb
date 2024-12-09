import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import AccessEnvironmentPageObjects from "../../../support/page_objects/AccessEnvironmentPage"
import ProductPageObjects from "../../../support/page_objects/ProductPage"
import CartPageObjects from "../../../support/page_objects/CartPage"

Given("que eu tenha acesso ao site", () => {
    AccessEnvironmentPageObjects.accessEnvironment()
});

When("eu clicar no campo de busca", () => {
    ProductPageObjects.clickSearchProductField()                             
});

When("preencher o nome de um produto", () => {
    ProductPageObjects.inputProductName('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')
});

When("clicar no produto pesquisado", () => {
    ProductPageObjects.clickProductName()
});

When("adicionar o produto ao carrinho", () => {
    ProductPageObjects.clickAddCart()
});  

Then("devo visualizar o produto adicionado no carrinho", () => {
    CartPageObjects.validateProdutcCart()
});