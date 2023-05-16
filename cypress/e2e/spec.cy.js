describe("Positive test suit", () => {   // тест сьют
  it("Test 1", () => {
    cy.visit('https://example.com') // тести
  })
  
  it("Test 2", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 3", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 4", () => {
    cy.visit('https://example.com')
  })
})



describe("Negative test suit", () => {   // тест сьют
  it("Test 1", () => {
    cy.visit('https://example.com') // тести
  })
  
  it("Test 2", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 3", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 4", () => {
    cy.visit('https://example.com')
  })
})



describe("Some test suit", () => {   // тест сьют
  it("Test 1", () => {
    cy.visit('https://example.com') // тести
  })
  
  it("Test 2", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 3", () => {
    cy.visit('https://example.com')
  })
  
  it("Test 4", () => {
    cy.visit('https://example.com')
  })

  describe("Some another test suit", () => {   // тест сьют
    it("Test 1", () => {
      cy.visit('https://example.com') // тести
    })
    
    it("Test 2", () => {
      cy.visit('https://example.com')
    })
    
    it.skip("Test 3", () => {  // skip - раняться всі тести, крім скіпнутого. Можна скіпнути весь тест-сьют (ставити skip після describe)
      cy.visit('https://example.com')
    })
    
    it.only("Test 4", () => {    // only - запускає тільки цей тест з усього файлу
      cy.visit('https://example.com')
    })
  })
})