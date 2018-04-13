import { Selector } from "testcafe";
import Page from "../../support/page-model";


export const tablePage = new Page( );


tablePage.path = "/challenging_dom";
tablePage.expectedStrings = [
  "Iuvaret",
  "Apeirian",
  "Adipisci",
  "Definiebas",
  "Consequuntur",
  "Phaedrum"
];
tablePage.rows = Selector( "table > tbody > tr" );
tablePage.cell = "td";
tablePage.getSpecificCell = async function( row, column ) {
  const arrayRow = row - 1;
  const arrayColumn = column - 1;
  const cell = await this.rows.nth( arrayRow ).child( this.cell ).nth( arrayColumn ).innerText;

  return cell
};
