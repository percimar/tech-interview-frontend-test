/// <reference types="cypress" />

describe("Language Switch", () => {
  beforeEach(() => cy.visit("/"));

  it("starts as English", () => {
    cy.document().then((doc) => {
      expect(doc.documentElement.lang).to.eq("en");
      expect(doc.dir).to.eq("ltr");
    });
  });

  it("can switch to Arabic", () => {
    cy.get("[data-testid=LangBtn]").click();
    cy.document().then((doc) => {
      expect(doc.documentElement.lang).to.eq("ar");
      expect(doc.dir).to.eq("rtl");
    });
  });

  it("can switch back to English", () => {
    cy.get("[data-testid=LangBtn]").click();
    cy.get("[data-testid=LangBtn]").click();
    cy.document().then((doc) => {
      expect(doc.documentElement.lang).to.eq("en");
      expect(doc.dir).to.eq("ltr");
    });
  });
});
