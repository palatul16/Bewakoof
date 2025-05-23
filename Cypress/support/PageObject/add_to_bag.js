class AddTobag{
    Adding(){
        cy.wait(4000);
        cy.get('#best1 > :nth-child(3) > img').click({force: true})
        cy.get('.pd-add-to-bag-text').click();
    }

    redirect(){
        cy.get('#best1 > :nth-child(3) > img').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.wait(3000)
        cy.url().should('contain','https://bewakoooff.netlify.app/html/product.html').then(() => {
            cy.log('Test case is failed');
          });
    }

    cartCount(){
        cy.get('#best1 > :nth-child(3) > img').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('//span[@class="cart-count"]').should('be.visible')
    } 

    Removing(){
        cy.xpath('//*[@id="best3"]/div[4]/div/h3').click({ force: true });
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('//button[@class="remove-cart"]').click()
        cy.xpath('//span[@class="cart-count"]').should('be.visible')
    } 

    cartCountR(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.get('.remove-cart').click()
        cy.xpath('//span[@class="cart-count"]').should('contain','0 items(s)')
    }

    totalPriceAfterRemovingaProduct(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.get('.remove-cart').click()
        cy.xpath('(//p[@class="summary-total"])[1]').should('contain','₹0')
    }
    
    addMultipleProducts(){
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.get('.pd-add-to-bag-text').click()
        cy.go('back')
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath('(//p[@class="summary-total"])[1]').should('contain','₹2398')
    }

    productAppears(){
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.xpath('//button[@class="pd-size-s pd-size-btn"]').click()
        cy.get('.pd-add-to-bag-text').click()
        cy.xpath('(//img[@class="nav-icon"])[2]').click()
        cy.xpath("(//h5[@class='cart-prod-title' and text()=\"Men's Slim-Fit Chinos\"])[1]").should('contain',"Men's Slim-Fit Chinos").then(() => {
            cy.log('Test case is passed');
          });

    }

    sizeGuide(){
        cy.contains("p", "Men's Slim-Fit Chinos").should('be.visible').click({force: true});
        cy.xpath('//li[@class="pd-guide"]').click()
        cy.url().should('contain','https://bewakoooff.netlify.app/html/product.html').then(() => {
            cy.log('Test case is passed');
          });
    }
}

export default AddTobag;