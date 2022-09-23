describe("Website hosting", () => {
  it("passes", () => {
    cy.visit("https://viper-10.github.io/Employee-Registration-Form/");
  });
});
describe("DOM elements", () => {
  it("tests if there is first name input", () => {
    cy.get("#first-name");
  });

  it("tests if there is last name input", () => {
    cy.get("#last-name");
  });

  it("tests if there is email input", () => {
    cy.get("#personal-email");
  });

  it("tests if there is aadhar id input", () => {
    cy.get("#aadhar-card-id");
  });

  it("tests if there is pan id input", () => {
    cy.get("#pan-card-id");
  });

  it("tests if there is phone number input", () => {
    cy.get("#phone-number");
  });

  it("tests if there is designation input", () => {
    cy.get("#designation");
  });
});

const validEmployeeDetails = {
  employeeId: "Intern#1",
  firstName: "Priyadharshan",
  lastName: "Ravichandran",
  panCardId: "ABCDE1234F",
  email: "priyadharshanbeepee@gmail.com",
  aadharCardId: "123456789012",
  phoneNumber: "1234567890",
  designation: "intern",
};
const inValidEmployeeDetails = {
  employeeId: " ",
  firstName: "123",
  lastName: "123",
  panCardId: "ADE1234F",
  email: "pd..kj@gmail.com",
  aadharCardId: "3456789012",
  phoneNumber: "12567890",
};
describe("Validations", () => {
  it("shows error message for invalid employee-id-input", () => {
    cy.get("#employee-id").type(inValidEmployeeDetails.employeeId);
    cy.get("#employee-id").blur();
    cy.get(":nth-child(1) > .input-wrapper + .error-message").contains(
      "Invalid Employee id"
    );
    cy.get("#employee-id").clear();
  });

  it("shows error message for invalid first-name-input", () => {
    cy.get("#first-name").type(inValidEmployeeDetails.firstName);
    cy.get("#first-name").blur();
    cy.get(":nth-child(2) > .input-wrapper + .error-message").contains(
      "Invalid first name"
    );
    cy.get("#first-name").clear();
  });

  it("shows error message for invalid last-name-input", () => {
    cy.get("#last-name").type(inValidEmployeeDetails.lastName);
    cy.get("#last-name").blur();
    cy.get(":nth-child(3) > .input-wrapper + .error-message").contains(
      "Invalid last name"
    );
    cy.get("#last-name").clear();
  });
  it("shows error message for invalid email-id-input", () => {
    cy.get("#personal-email").type(inValidEmployeeDetails.email);
    cy.get("#personal-email").blur();

    cy.get(":nth-child(4) > .input-wrapper + .error-message").contains(
      "Invalid Email id"
    );
    cy.get("#personal-email").clear();
  });
  it("shows error message for invalid aadhar-card-input", () => {
    cy.get("#aadhar-card-id").type(inValidEmployeeDetails.aadharCardId);
    cy.get("#aadhar-card-id").blur();

    cy.get(":nth-child(5) > .input-wrapper + .error-message").contains(
      "Invalid Aadhar id"
    );
    cy.get("#aadhar-card-id").clear();
  });
  it("shows error message for invalid pan-card-input", () => {
    cy.get("#pan-card-id").type(inValidEmployeeDetails.panCardId);
    cy.get("#pan-card-id").blur();

    cy.get(":nth-child(6) > .input-wrapper + .error-message").contains(
      "Invalid Pan card id"
    );
    cy.get("#pan-card-id").clear();
  });
  it("shows error message for invalid phone number input", () => {
    cy.get("#phone-number").type(inValidEmployeeDetails.phoneNumber);
    cy.get("#phone-number").blur();

    cy.get(":nth-child(7) > .input-wrapper + .error-message").contains(
      "Invalid Phone number"
    );
    cy.get("#phone-number").clear();
  });

  it("checks if the choose option in designation input is disabled", () => {
    cy.get("#designation").get('[value="choose"]').should("be.disabled");
  });
});
describe("Form submit", () => {
  it("Shows error messages when form is submitted with invalid fields", () => {
    cy.get("#employee-id").type(inValidEmployeeDetails.employeeId);
    cy.get("#first-name").type(inValidEmployeeDetails.firstName);

    cy.get("#last-name").type(inValidEmployeeDetails.lastName);

    cy.get("#personal-email").type(inValidEmployeeDetails.email);

    cy.get("#aadhar-card-id").type(inValidEmployeeDetails.aadharCardId);

    cy.get("#pan-card-id").type(inValidEmployeeDetails.panCardId);

    cy.get("#phone-number").type(inValidEmployeeDetails.phoneNumber);

    cy.get(".submit-btn").click();

    cy.get(":nth-child(1) > .input-wrapper + .error-message").contains(
      "Invalid Employee id"
    );

    cy.get(":nth-child(2) > .input-wrapper + .error-message").contains(
      "Invalid first name"
    );

    cy.get(":nth-child(3) > .input-wrapper + .error-message").contains(
      "Invalid last name"
    );

    cy.get(":nth-child(4) > .input-wrapper + .error-message").contains(
      "Invalid Email id"
    );

    cy.get(":nth-child(5) > .input-wrapper + .error-message").contains(
      "Invalid Aadhar id"
    );

    cy.get(":nth-child(6) > .input-wrapper + .error-message").contains(
      "Invalid Pan card id"
    );

    cy.get(":nth-child(7) > .input-wrapper + .error-message").contains(
      "Invalid Phone number"
    );
    cy.get("#designation").select(2);

    cy.get("#employee-id").clear();
    cy.get("#first-name").clear();
    cy.get("#last-name").clear();
    cy.get("#personal-email").clear();
    cy.get("#aadhar-card-id").clear();
    cy.get("#pan-card-id").clear();
    cy.get("#phone-number").clear();
  });
});
