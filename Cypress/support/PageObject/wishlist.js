class wishlist {
    addingToWishlist(){
        cy.wait(3000)
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-wishlist-text').click({force: true})
        cy.xpath('(//img[@class="nav-icon"])[1]').click();
    }

    checkingToWishlist(){
        cy.wait(3000)
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-wishlist-text').click({force: true})
        cy.get('.pd-wishlist-text').click({force: true})
        cy.get('span.pd-wishlist-text').invoke('text').then((text) => {
        if(expect(text.trim()).to.equal('WISHLISTED'))
            {
                cy.log('Test case passed')
            }
   
        });

    }

    removingToWishlist(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({force: true})
        cy.get('.pd-wishlist-text').click({force: true})
        cy.xpath('(//img[@class="nav-icon"])[1]').click()
        cy.xpath('(//i[@class="fa-regular fa-circle-xmark fa-lg"])[1]').click()
    }

    
}

export default wishlist;