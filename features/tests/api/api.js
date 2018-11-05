const frisby = require( 'frisby' );
const baseUrl = 'https://jsonplaceholder.typicode.com';
let x;


  fixture `Api request`
    .page( baseUrl )


    test( "1", async t => {
      return frisby
        .get( baseUrl + '/posts' )
        .expect( 'status', 200 )
        .then( function( res) {
          console.log( res.json )
          x = res.json;
        })

    });


    test( "2", async t => {
      console.log( "2   " + x[0] )
    });
