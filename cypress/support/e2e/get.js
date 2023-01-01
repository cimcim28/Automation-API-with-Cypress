describe("Petstore Get API Inventory testing", () => {
	it("get store inventort - GET", () => {
		cy.request("/store/inventory").as("getInventory");
		cy.get("@getInventory").then((inventory) => {
			expect(inventory.status).to.equal(200);
		});
	});
});
