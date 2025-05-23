class Coupan{
    cashbackCoupan(){
        cy.newLogin();
    
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('/html/body/div[1]/div/div[2]/div[2]/p').invoke('text').should('include', '15% cashback').then((text) => {
            cy.log(`Found text: ${text}`);
        });
    }
}

export default Coupan;