class Search {
    textInput(){
        cy.visit('https://bewakoooff.netlify.app/html/index.html')
        cy.xpath('//input[@placeholder="search"]').type('Joggers').should('have.value','Joggers');
    }

    incorrectSearchResult(){
        cy.visit('https://bewakoooff.netlify.app/html/index.html');
        cy.xpath('//input[@placeholder="search"]').type('HEAVY DUTY').type('{enter}');
        cy.url().should('contain','https://bewakoooff.netlify.app/html/index.html').then(() => {
            cy.log('Test case failed');
        });
    }

}

export default Search;