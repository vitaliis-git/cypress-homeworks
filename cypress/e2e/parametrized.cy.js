describe('', () => {
    const testGoogle = (testData, expectedResult) => 

    function(){
        cy.visit('https://google.com/');
        cy.get('textarea.gLFyt').type(testData);
        cy.get('div.wM6W7d').should('contain', `${expectedResult}`);
    };

it('search for sypress', testGoogle('CYPRESS', 'cypress'));
it('search for audi', testGoogle('AUDI', 'audi'));
it('search for BMW', testGoogle('BMW', 'bmw'));
})




// it.only("Test retries", () => {     // ретраї
//     cy.visit('https://google.com/');

//     cy.get('textarea.gLFyf').type('TEXT');
//     cy.get('div.wM6W7d').should('contain', 'text');  // should - перевіряє чи елемент містить певний текст
//   })



describe.skip('Multiple tests', () => {
    const tests = [
        {testData: [3, 2, 1], expectedResult: '1'},
        {testData: [3, 1, 2], expectedResult: '2'},
        {testData: [1, 2, 3], expectedResult: '3'},
    ]

    tests.forEach(({testData, expectedResult}) => {
        it(`Test ${testData}`, () => {
            cy.visit('https://google.com/');
            cy.get('textarea.gLFyf').clear().type(testData[0]);
            cy.get('textarea.gLFyf').clear().type(testData[1]);
            cy.get('textarea.gLFyf').clear().type(testData[3]);

            cy.get('div.wM6W7d').should('contain', expectedResult);
        })
    })
})