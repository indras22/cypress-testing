class HomePage
{
  getEditBox()
  {

    return cy.get("input[name='name']:nth-child(2)")
  }

  getTwoWayDataBinding()
  {
    return cy.get("input[name='name']:nth-child(1)")
  }

  getGender()
  {

    return cy.get('select')
  }

  getEnterprener()

  {
    return cy.get("label[for='inlineRadio3']")
  }

  getShoptab()

  {

    return cy.get(':nth-child(2) > .nav-link')
  }

}

export default HomePage;