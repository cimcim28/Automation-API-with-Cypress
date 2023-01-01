describe("Petstore Get API Inventory testing", () => {
	it("Create a user", () => {
		let body = {
			id: 0,
			username: Cypress.env("username"),
			firstName: "depan",
			lastName: "belakang",
			email: "prisma@mail.com",
			password: "283213121",
			phone: "19212839123",
			userStatus: 0,
		};
		console.log(body);
		cy.request("POST", "/user", body).as("createUser");
		cy.get("@createUser").then((createUser) => {
			expect(createUser.status).to.eq(200);
		});
	});

	const loginUser = {
		method: "GET",
		url: "/user/login",
		qs: {
			username: Cypress.env("username"),
			password: Cypress.env("password"),
		},
	};

	it("Login registered user", () => {
		cy.request(loginUser).as("loginUser");
		cy.get("@loginUser").then((loginUser) => {
			expect(loginUser.status).to.eq(200);
		});
	});
});
