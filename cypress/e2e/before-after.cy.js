describe("Before method", () => {
    
  //метод before виконується 1 раз перед усім тест-сьютом
    before(() => {
      cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      cy.get('[title="Forms"]').click;
      cy.get('[title="Form Layouts"]').click;
    })
  
    it("Test 1", () => {
      cy.get('[placeholder="Jane Doe"]').type('Hello');
    })
    
    it("Test 2", () => {
      // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
      // cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
      // cy.get('[title="Forms"]').click;
      // cy.get('[title="Form Layouts"]').click;
      cy.get('[placeholder="Jane Doe"]').type('Hello');
    })
  })



  describe("Before each method", () => {
    
    // метод beforeEach виконується перед кожним тестом в тест-сюті
      beforeEach(() => {
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('[title="Forms"]').click;
        cy.get('[title="Form Layouts"]').click;
      })
    
      it("Test 1", () => {
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
      
      it("Test 2", () => {
        // cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        // cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        // cy.get('[title="Forms"]').click;
        // cy.get('[title="Form Layouts"]').click;
        cy.get('[placeholder="Jane Doe"]').type('Hello');
      })
    })



    describe("After method", () => {
    
      // метод after виконується 1 раз після тест-сьюта
        beforeEach(() => {
          cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');

          cy.log(`Open "Form Layouts" page...`);
          cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
          cy.get('[title="Forms"]').click;
          cy.get('[title="Form Layouts"]').click;
        })

        after(() => {
          cy.log("HELLO");
        })
      
        it("Test 1", () => {
          cy.get('[placeholder="Jane Doe"]').type('Hello');
        })
        
        it("Test 2", () => {
          cy.get('[placeholder="Jane Doe"]').type('Hello');
        })
      })



      describe("After each method", () => {
    
        // метод after each виконується після кожного тесту
          beforeEach(() => {
            cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  
            cy.log(`Open "Form Layouts" page...`);
            cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
            cy.get('[title="Forms"]').click;
            cy.get('[title="Form Layouts"]').click;
          })
  
          afterEach(() => {
            cy.log("HELLO");
          })
        
          it("Test 1", () => {
            cy.get('[placeholder="Jane Doe"]').type('Hello');
          })
          
          it("Test 2", () => {
            cy.get('[placeholder="Jane Doe"]').type('Hello');
          })
        })



it.only("Test retries", {retries: 2}, () => {     // ретраї
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.log(`Open "Form Layouts" page...`);
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Forms"]').click;
  cy.get('[title="Form Layouts"]').click;
  cy.get('[placeholder="Jane Doe"]').type('Hello');
})