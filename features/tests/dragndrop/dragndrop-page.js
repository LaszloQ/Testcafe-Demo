import { Selector } from "testcafe";
import Page from "../../support/page-model";


export const dragndropPage = new Page( );

dragndropPage.path = "/drag_and_drop";
dragndropPage.elementA = Selector( "#column-a" );
dragndropPage.elementB = Selector( "#column-b" );
dragndropPage.firstPosition = Selector( "#columns > div:first-of-type" );

dragndropPage.getFirstPositionElement = async function( ) {
  const firstElement = await this.firstPosition;
  const header = await firstElement.find( "header" ).innerText;

  return header;
};

dragndropPage.dragFirstElementOnSecond = async function( t ) {
  await t.dragToElement( this.elementA, this.elementB )
};
