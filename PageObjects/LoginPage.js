class Login

{
  setUserName(username)
  {
    cy.get("[placeholder='Username']").type(username);

  }

  setPassword(password)
  {
    cy.get("[placeholder='Password']").type(password);

  }

  clickSubmit()

  {
    cy.get("button[type='submit']").click();

  }

  VerifyLogin()

  {

    cy.get('h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard');
  }

     
}

export default Login;