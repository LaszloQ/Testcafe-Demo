import { Selector } from "testcafe";


fixture `Registration`
  .page( "http://automationpractice.com/index.php" )


  test.only( "My first test", async t => {
    const signInButton = Selector( "a.login" );
    const emailINput = Selector( "#email_create" )
    const submitButton = Selector( "#SubmitCreate" );

    await t
      .click( signInButton )
      .expect( true ).eql( true )
      .typeText( emailINput, "mailzmail@yopmail.com" )
      .click( submitButton )
  });
