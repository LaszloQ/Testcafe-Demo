import { dragndropPage } from "./dragndrop-page";


fixture `Drag and Drop`
  .page( dragndropPage.baseUrl + dragndropPage.path )


  test.only( "Switch elements by drag and drop", async t => {
    const firstElement = await dragndropPage.getFirstPositionElement( );

    const x = await dragndropPage.getUrl( );

    console.log( x )
    await t.expect( firstElement ).eql( "A" );
    await dragndropPage.dragFirstElementOnSecond( t );

    const firstElementAfterDrag = await dragndropPage.getFirstPositionElement( );

    await t.expect( firstElementAfterDrag ).eql( "B" );
  });
