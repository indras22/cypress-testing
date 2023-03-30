class Login

{
  
txtUsername= "[placeholder='Username']";
txtPassword= "[placeholder='Password']";
btnSubmit="button[type='submit']";
lblmsg='h6.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module';

  setUserName(username)
  {
    cy.get(this.txtUsername).type(username);

  }

  setPassword(password)
  {
    cy.get(this.txtPassword).type(password);

  }

  clickSubmit()

  {
    cy.get(this.btnSubmit).click();

  }

  VerifyLogin()

  {

    cy.get(this.lblmsg).should('have.text','Dashboard');
  }

     
}

export default Login;