const { describe } = require("mocha");

describe('Test Inline form', () => {
    const testForm = (enteredName, expectedName, enteredEmail, expectedEmail) =>

    function(){
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/pages/forms/layouts');
        cy.get('[placeholder="Jane Doe"]').type(enteredName);
        cy.get('[placeholder="Jane Doe"]').should('contain.value', `${expectedName}`);
        cy.get('[placeholder="Email"]').type(enteredEmail);
        cy.get('[placeholder="Email"]').should('contain.value', `${expectedEmail}`);
        cy.get('[class="custom-checkbox"]').click();
        cy.get('body > ngx-app > ngx-pages > ngx-sample-layout > nb-layout > div > div > div > div > div > nb-layout-column > ngx-form-elements > ngx-form-layouts > div:nth-child(1) > div > nb-card > nb-card-body > form > button').click();
    }

    it('Vitalii test', testForm('Vitalii', 'Vitalii', 'vitalii@test.com', 'vitalii@test.com'));
    it('Oleg test', testForm('Oleg', 'Oleg', 'oleg@test.com', 'oleg@test.com'));
})