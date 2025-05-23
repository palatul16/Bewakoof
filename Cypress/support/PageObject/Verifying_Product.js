class verifyingProduct{
    sizeType(){
        cy.newLogin();
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.xpath('//li[@class="pd-fit"]').should('be.visible').then(() => {
            cy.log('Size type is displayed');
        });
    }

    fabricType(){
        cy.newLogin();

        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.xpath('//li[@class="pd-quality"]').should('be.visible').then(() => {
            cy.log('Fabric type is displayed');
        });
    }

    discountDisplayPercentage(){
        cy.newLogin();
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.xpath('//li[@class="pd-discount-percentage"]').should('be.visible').then(() => {
            cy.log('Discount percentage is displayed');
        });
    }

    productRating(){
        cy.newLogin();
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.xpath('//span[@class="pd-rating-value"]').should('be.visible').then(() => {
            cy.log('Product rating is displayed');
        });
    }

    sizeTypeNotDisplayforOther(){
        cy.newLogin();
        cy.xpath('//*[@id="best3"]/div[4]/div/h3').click({ force: true });
        cy.xpath('//li[@class="pd-fit"]').invoke('text').should('contain','').then(() => {
            cy.log('Size type is not displayed');
            cy.log('Test case failed');
        });
    }

    fabricTypeNotDisplayforOther(){
        cy.newLogin();
        cy.xpath('//*[@id="best3"]/div[4]/div/h3').click({ force: true });
        cy.xpath('//li[@class="pd-quality"]').invoke('text').should('include','').then(() => {
            cy.log('Fabric type is not displayed');
            cy.log('Test case failed');
        });
    }





}

export default verifyingProduct;