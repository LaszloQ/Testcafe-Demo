import { Selector } from "testcafe";
import Page from "../../support/page-model";


export const sortableTablePage = new Page( );

sortableTablePage.path = "/tables";
sortableTablePage.row = Selector( "#table1 > tbody > tr" );
sortableTablePage.headCell = Selector( "#table1 > thead th" );

sortableTablePage.checkSortingOnColumn = async function( t, index ) {

  await t
    .click( sortableTablePage.headCell.nth( index ) )
    .setTestSpeed( 0.1 )
    
  const numberOfRows = await this.row.count;
  const array = [];
  let array2 = [];
  let returnValue;

  for( let i = 0; i < numberOfRows; i++ ) {
    const cellText = await this.row.nth( i ).child( "td" ).nth( index ).innerText;

    array.push( cellText );
    array2.push( cellText );
  }

  for( let j = 0; j < array.length; j++ ) {
    if( array.sort( )[j] === array2[j] ) {
      returnValue = true;
    } else {
      returnValue = false;
    }
  }

  return returnValue;
};
