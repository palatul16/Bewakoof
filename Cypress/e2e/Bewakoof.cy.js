import Login from "../support/PageObject/Login";
import Search from "../support/PageObject/Search_Functionality";
import SignUp from "../support/PageObject/SignUp";
import verifyingProduct from "../support/PageObject/Verifying_Product";
import AddTobag from "../support/PageObject/add_to_bag";
import Coupan from "../support/PageObject/coupan";
import order from "../support/PageObject/order";
import wishlist from "../support/PageObject/wishlist";

const URL = "https://bewakoooff.netlify.app/html/index.html";

describe('1. Performing a complete automation testing on the registration part', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('1. Sign_Up with valid credentials using automation', () => {
        const signupPage = new SignUp()
        signupPage.signup();
    });

    it('2. verifying we are on signup page or not', () => {
        const Pagechecking = new SignUp()
        Pagechecking.pageChecking();
    });

    it('3. we are doing a invalid signup ( we are putting same details again)', () => {
        const Invalid = new SignUp()
        Invalid.invalidSignUp(); 
    });

    it('4. we are checking data is filled or not  ', () => {
        const Data = new SignUp()
        Data.dataFill();
    });

    it('5. we are checking blank field  alerts ', () => {
        const blank = new SignUp()
        blank.blankField();
    });
    
    it('6. we are checking empty Name field  alerts ', () => {
        const emptyN = new SignUp()
        emptyN.emptyName();
    });

    it('7. we are checking empty Username field  alerts ', () => {
        const emptyU = new SignUp()
        emptyU.emptyUsername();
    });

    it('8. we are checking empty Password field  alerts ', () => {
        const emptyP = new SignUp()
        emptyP.emptyPassword();
    });

    it('9. we are checking empty email field  alerts ', () => {
        const emptyE = new SignUp()
        emptyE.emptyEmail();
    });

    it('10. we are checking empty password field  alerts ', () => {
        const emptyP = new SignUp()
        emptyP.emptyPhone();
    });

    it('11. we are checking a password input less than a 5 characters field  alerts ', () => {
        const passLess = new SignUp()
        passLess.passLessto5();
    });
    
});

describe('2. Performing a complete automation testing on the Login part', () => {
    beforeEach(() => {
        cy.visit(URL);
    });


    it('1. Login with valid credentials ', () => {
        const signupPage = new SignUp()
        signupPage.signup();
        cy.go(-1);
        const loggedin = new Login()
        loggedin.login()        
    });

    it('2. Verifies that clicking the user icon navigates to the Login page.', () => {
        const navigation = new Login()
        navigation.navigates();
    });

    it('3. Tests login with missing username and expects error alerts.', () => {
        const MissedUser = new Login()
        MissedUser.missedUsername();
    });

    it('4. Tests login with missing password and expects error alerts.', () => {
        const MissedPass = new Login()
        MissedPass.missedPassword();
    });

    it('5. Attempts login with wrong username (expects error).', () => {
        const incorrectUser = new Login()
        incorrectUser.incorrectUsername();
    });

    it('6. Attempts login with wrong password (expects error).', () => {
        const incorrectPass = new Login()
        incorrectPass.incorrectPassword();
    });

    it('7. Logs in with correct credentials (expects success alert).', () => {
        const successLoggedIn = new Login()
        successLoggedIn.successLogin();
    });

    it('8. Logs in and checks URL redirection to the homepage.', () => {
        const urlRedirect = new Login()
        urlRedirect.urlRedirection();
    });

    it('9. Logs in and checks URL redirection to the homepage.', () => {
        const signupPage = new SignUp()
        signupPage.signup();
        cy.go(-1);
        const correctDisplayInfo = new Login()
        correctDisplayInfo.correctDisplayName();
    });




    


});

describe('3. This suite tests the search functionality on the Bewakoof website.', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    
    it('1. Tests if the search input field accepts text.', () => {
        const text = new Search()
        text.textInput();
        
    });

    it('2. Tests searching for a product and incorrectly checks the URL.', () => {
        const incorrectSearch = new Search()
        incorrectSearch.incorrectSearchResult();
    });
});

describe('4. This test suite verifies the functionality of adding, viewing, and removing products from the shopping bag.', () => {

    beforeEach(() => {
        cy.visit(URL);
        const signupPage = new SignUp()
        signupPage.signup();
        cy.go(-1);
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();

        cy.on('window:alert', (msg) => {
            if (msg.includes("Logged In")) {
                expect(msg).to.include("Logged In");
                return true;
            }
        });
    });

    it('1. Verify Adding a Product to the Bag', () => {
       const addBag = new AddTobag()
       addBag.Adding();
    });

    it('2. Verify Redirection After Adding a Product', () => {
        const redirectionAfterAdding = new AddTobag()
        redirectionAfterAdding.redirect();
    });

    it('3. Verify Cart Count After Adding a Product', () => {
        const addcartCounting = new AddTobag()
        addcartCounting.cartCount();
    });

    it('4. Verify Removing a Product from the Cart', () => {
        const removeProduct = new AddTobag()
        removeProduct.Removing();
    });

    it('5. Verify Cart Count After Removing an Item', () => {
        const removecartCounting = new AddTobag()
        removecartCounting.cartCountR();
    });

    it('6. Verify Total Price Updates After Removing a Product', () => {
        const totalPriceRemoving = new AddTobag()
        totalPriceRemoving.totalPriceAfterRemovingaProduct();
    });

    it('7. Add Multiple Products to the Bag and Verify Cart Total', () => {
        const addMultipleProductToCart = new AddTobag()
        addMultipleProductToCart.addMultipleProducts();
    });

    it('8. Verify the Selected Product Appears in the Cart', () => {
        const appearsMultipleProductToCart = new AddTobag()
        appearsMultipleProductToCart.productAppears();
    });

    it('9. Verify Size Guide Navigation', () => {
        const SizeGuideNavigation = new AddTobag()
        SizeGuideNavigation.sizeGuide();
    });
    
});

describe('5. This test suite verifies the functionality of adding, removing, and validating items in the wishlist', () => {

    beforeEach(() => {
        cy.visit(URL);
        const signupPage = new SignUp()
        signupPage.signup();
        cy.go(-1);
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();

        cy.on('window:alert', (msg) => {
            if (msg.includes("Logged In")) {
                expect(msg).to.include("Logged In");
                return true;
            }
        });
    });

    it('1. Verify Adding a Product to the Wishlist', () => {
        const adding = new wishlist()
        adding.addingToWishlist();
    });

    it('2. checking we are on the right page or not (Wishlist Page)', () => {
        const removing = new wishlist()
        removing.checkingToWishlist();
    });

    it('3. Verify Removing a Product from the Wishlist Page', () => {
        const removing = new wishlist()
        removing.removingToWishlist();
    });



});

describe('6. This suite is focused on testing the ordering process on the Bewakoof website.', () => {
   
    beforeEach(() => {
        cy.visit(URL);
        const signupPage = new SignUp()
        signupPage.signup();
        cy.go(-1);
        cy.get('#user').click();
        cy.get('.login-link').click();
        cy.get('.login-username').type('pal16');
        cy.get('.login-password').type('123456');
        cy.get('.login-btn').click();

        cy.on('window:alert', (msg) => {
            if (msg.includes("Logged In")) {
                expect(msg).to.include("Logged In");
                return true;
            }
        });
    });
   
    it('1. Place an Order Without Adding an Address', () => {
        const orderWithoutAddress = new order()
        orderWithoutAddress.withoutAddress();
    });

    it('2. Place an Order with an Incomplete Address (Missing Fields)', () => {
        const orderIncompleteAddress = new order()
        orderIncompleteAddress.incompleteAddress();
    });

    it('3. Place an Order with a Complete Address', () => {
        const ordercompleteAddress = new order()
        ordercompleteAddress.completeAddress();
    });

    it('5. Place an Order with Missing Name Field', () => {
        const missingName = new order()
        missingName.orderWithoutName();
    });

    it('6. Order with Missing Mobile Number', () => {
        const missingMobile = new order()
        missingMobile.missingMobileNumber();
    });

    it('7. Place an  Order with Missing Pincode', () => {
        const missingPincode = new order()
        missingPincode.missingPin_Code();
    });

    it('8. place an Order with Missing City Field', () => {
        const missingcityField = new order()
        missingcityField.missingCity();
    });

    it('9. Order Cancellation', () => {
        const ordercancel = new order()
        ordercancel.orderCancellation();
    });

    
});

describe("7. This test suite verifies different aspects of a product's details on the Bewakoof website.", () => {
    it('1. Verify Size Type Display', () => {
        const size = new verifyingProduct()
        size.sizeType();
    });

    it('2. Verify Fabric Type Display', () => {
        const fabric =  new verifyingProduct()
        fabric.fabricType();
    });

    it('3.  Verify Discount Percentage Display', () => {
        const discount =  new verifyingProduct()
        discount.discountDisplayPercentage();
    });

    it('4.  Verify Product Rating Display', () => {
        const rating =  new verifyingProduct()
        rating.productRating();
    });

    it('5. Verify Size Type is Not Displayed for a Different Product', () => {
        const notDisplaySize =  new verifyingProduct()
        notDisplaySize.sizeTypeNotDisplayforOther();
    });

    it('6. Verify Fabric Type is Not Displayed for a Different Product', () => {
        const notDisplayFabric =  new verifyingProduct()
        notDisplayFabric.fabricTypeNotDisplayforOther();
    });





});

describe('8. This test suite verifies the presence of coupon-related details, particularly the 15% cashback offer, in the shopping cart.', () => {
    it('1. Verify 15% Cashback Coupon is Displayed', () => {
        const cashCoupan = new Coupan()
        cashCoupan.cashbackCoupan();
    });
});