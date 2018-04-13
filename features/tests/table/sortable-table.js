import { sortableTablePage } from "./sortable-table-page";


fixture `Sortable Tables`
  .page( sortableTablePage.baseUrl + sortableTablePage.path )


  test( "Last Name can be sorted by alpabetical order", async t => {
    const result = await sortableTablePage.checkSortingOnColumn( t, 0 )

    await t.expect( result ).eql( true );
  });


  test( "First Name can be sorted by alpabetical order", async t => {
    const result = await sortableTablePage.checkSortingOnColumn( t, 1 )

    await t.expect( result ).eql( true );
  });


  test.only( "Email can be sorted by alpabetical order", async t => {
    const result = await sortableTablePage.checkSortingOnColumn( t, 2 )

    await t.expect( result ).eql( true );
  });
