import { Selector, ClientFunction } from "testcafe";
import Page from "../../support/page-model";

export const canvasPage = new Page( );


canvasPage.path = "/challenging_dom";

canvasPage.returnCanvasInfo = ClientFunction( ( ) => {
  const canvas = document.getElementById( "canvas" );
  const info = canvas.getContext( "2d" );

  return info.canvas;
});
