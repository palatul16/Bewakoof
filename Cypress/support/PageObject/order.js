import Commands from "../commands";

class order{

    withoutAddress(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();
        cy.xpath('//button[@class="place-order"]').click();
        // cy.wait(4000)
        // cy.on('window:alert',(text) => {
        //     expect(text).to.eq('Fill in all the fields!');
        // })
    }

    incompleteAddress(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.address()
        cy.xpath('//input[@placeholder="Landmark(optional)"]').type('7 towers')
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.url().should('equal','https://bewakoooff.netlify.app/html/index.html')

    }

    completeAddress(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.address(); // importing a address from a commands.js file
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.url().should('equal','https://bewakoooff.netlify.app/html/index.html')

    }

    orderWithoutName(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.xpath('//input[@placeholder="Mobile Number"]').type('9876543210')
    
        cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('60007')
        cy.xpath('//input[@placeholder="City"]').type('Telangana')
        cy.xpath('//input[@placeholder="State"]').type('block 4')
        cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
        cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.wait(4000)
        cy.url().should('equal','https://bewakoooff.netlify.app/html/cart').then(() => {
            cy.log('"Fill in all the fields!" popup is dispalyed');
        });

    }

    missingMobileNumber(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.xpath('//input[@placeholder="Full Name"]').type('izuku')
    
        cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('60007')
        cy.xpath('//input[@placeholder="City"]').type('Telangana')
        cy.xpath('//input[@placeholder="State"]').type('block 4')
        cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
        cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.wait(4000)
        cy.url().should('equal','https://bewakoooff.netlify.app/html/cart').then(() => {

            cy.log('"Fill in all the fields!" popup is dispalyed');
        });
    }

    missingPin_Code(){

        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.xpath('//input[@placeholder="Full Name"]').type('izuku')
        cy.xpath('//input[@placeholder="City"]').type('Telangana')
        cy.xpath('//input[@placeholder="State"]').type('block 4')
        cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
        cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.wait(4000)
        cy.url().should('equal','https://bewakoooff.netlify.app/html/cart').then(() => {
            cy.log('"Fill in all the fields!" popup is dispalyed');
        });
    }

    missingCity(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.xpath('//input[@placeholder="Full Name"]').type('izuku')
        cy.xpath('//input[@placeholder="Mobile Number"]').type('9876543210')
        cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('60007')
        cy.xpath('//input[@placeholder="State"]').type('block 4')
        cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
        cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
  
        cy.xpath('//button[@class="place-order"]').click();
        cy.wait(4000)
        cy.url().should('equal','https://bewakoooff.netlify.app/html/cart').then(() => {
            cy.log('"Fill in all the fields!" popup is dispalyed');
        });

    }

    orderCancellation(){
        cy.xpath('(//div[@class="cardCont"][3])[1]').click({ force: true });
        cy.get('.pd-add-to-bag-text').click();
        cy.xpath('(//img[@class="nav-icon"])[2]').click();
        cy.xpath('(//button[@class="add-address"])[1]').click();

        cy.address()
        // cy.xpath('//input[@placeholder="Full Name"]').type('izuku')
        // cy.xpath('//input[@placeholder="Mobile Number"]').type('9876543210')
        // cy.xpath('//input[@placeholder="Pincode/Postal Code/Zipcode"]').type('60007')
        // cy.xpath('//input[@placeholder="City"]').type('Telangana')
        // cy.xpath('//input[@placeholder="State"]').type('block 4')
        // cy.xpath('//input[@placeholder="Flat no/Building, Street Name"]').type('phase 2')
        // cy.xpath('//input[@placeholder="Area/Localtity"]').type('Hot café')
  
        cy.xpath('//button[@class="close-form"]').click();
        cy.wait(4000)
        cy.url().should('equal','https://bewakoooff.netlify.app/html/cart').then(() => {
            cy.log('Order cancelled');
        });
    }

}

export default order;