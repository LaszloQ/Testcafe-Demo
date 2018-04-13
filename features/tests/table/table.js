import { tablePage } from "./table-page";


fixture `Tables`
  .page( tablePage.baseUrl + tablePage.path )


  test( "Checking all table strings", async t => {
    const numberOfRows = await tablePage.rows.count;

    for( let i = 0; i < numberOfRows; i++ ) {
      const cells = await tablePage.rows.nth( i ).child( tablePage.cell );
      const numberOfCells = await cells.count;

      for( let j = 0; j < numberOfCells; j++ ) {
        const cellText = await tablePage.rows.nth( i ).child( tablePage.cell ).nth( j ).innerText;

        if( j === numberOfCells - 1 ) {
          await t.expect( cellText ).eql( "edit delete" );
        } else {
          await t.expect( cellText ).eql( tablePage.expectedStrings[ j ] + i );
        }
      }
    }
  });


  test( "Test the contents of a specific cell", async t => {
    const cellText = await tablePage.getSpecificCell( 4, 6 );

    await t.expect( cellText ).eql( "Phaedrum3" )
  });
