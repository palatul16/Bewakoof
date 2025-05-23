function getNewUser() {
    const now = new Date();
    const month = now.toLocaleString('en-US', { month: 'short' });
    const formattedDate = `${month}${now.getDate()}${now.getFullYear()}${now.getHours()}${now.getMinutes()}${now.getSeconds()}`;
    return `${formattedDate}@gmail.com`; // Proper string interpolation
}

class SignUp {

    // 1. Only Signup
    signup(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type(getNewUser()); // Using dynamically generated email
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
    }


    // 2. verifying we are on signup page or not
    pageChecking(){
        cy.get('#user').click();
        cy.get('.signup-container h1').invoke('text').then((text) => {
            expect(text.trim()).to.equal('Sign up');
        });
        

    }

    // 3. we are doing a invalid signup (registering with same credentials again)
    invalidSignUp(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyz@gmail.com'); 
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.go(-1);
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (text) => {        
            expect(text).to.eq("User is already registered. Please Log in");
                return true;
        });
        
    }
    

    // 4. verifying it filing the data or not
    dataFill(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-name').should('have.value','Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-username').should('have.value','pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-password').should('have.value','123456');
        cy.get('.signup-email').type(getNewUser()); // Using dynamically generated email
        cy.get('.signup-email').should('have.value',getNewUser());
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-number').should('have.value','9876543210');
        cy.get('.signup-btn').click();
        cy.get('.signup-btn').click().should('not.be.disabled');
        cy.url('https://bewakoooff.netlify.app/html/login').should('include', '/login');        
    }

    // 5.  we putted the sapce in all the fields
    blankField(){
        cy.get('#user').click();
        cy.get('.signup-name').type(' ');
        cy.get('.signup-username').type(' ');
        cy.get('.signup-password').type('      ');
        cy.get('.signup-email').type('_  @gmail.com');
        cy.get('.signup-number').type('12');
        cy.get('.signup-btn').click();

    }
    // 6.  wehen our fields are empty it show the validation
    // emptyField(){
    //     cy.get('#user').click();
    //     cy.get('.signup-username').type('pal16');
    //     cy.get('.signup-password').type('123456');
    //     cy.get('.signup-email').type('xyz@gmail.com');
    //     cy.get('.signup-number').type('9876543210');
    //     cy.get('.signup-btn').click();
    //     cy.on('window:alert',(text) => {
    //         expect(text).to.eq('Fill in all the fields!');
    //     })

    // }

    emptyName(){
        cy.get('#user').click();
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {        
            expect(msg1).to.eq("Fill in all the fields!");
                return true;
        });
    }

    emptyUsername(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {        
            expect(msg1).to.eq("Fill in all the fields!");
                return true;
        });
    }

    emptyPassword(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {        
            expect(msg1).to.eq("Fill in all the fields!");
                return true;
        });
    }


    // 6. should not allow registration with invalid email format
    emptyEmail(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyzabc'); 
        cy.get('.signup-email').wait(4000).should('contains','@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();

    }

    emptyPhone(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('123456');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {        
            expect(msg1).to.eq("Fill in all the fields!");
                return true;
        });
    }

    passLessto5(){
        cy.get('#user').click();
        cy.get('.signup-name').type('Atul');
        cy.get('.signup-username').type('pal16');
        cy.get('.signup-password').type('1234');
        cy.get('.signup-email').type('xyz@gmail.com');
        cy.get('.signup-number').type('9876543210');
        cy.get('.signup-btn').click();
        cy.on("window:alert", (msg1) => {        
            expect(msg1).to.eq("Password must be 5 characters or more!");
                return true;
        });
    }
   
}



export default SignUp;
