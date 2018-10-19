import { canvasPage } from "./canvas-page";
import { refreshPage } from "../../support/helpers";
var path = require('path');
var fs = require('fs');

fixture `Canvas`
  .page( canvasPage.baseUrl + canvasPage.path )


  test( "Reading the content of a canvas page", async t => {
    const canvasInfo = await canvasPage.returnCanvasInfo( );

    await refreshPage( );

    const canvasInfoAfterRefresh = await canvasPage.returnCanvasInfo( );

    await t.expect( canvasInfo ).eql( canvasInfoAfterRefresh );
    //console.log( canvasInfo )
  });


  test.skip( "Create a local image from the canvas details", async t => {
    const canvasInfo = await canvasPage.returnCanvasInfo( );
    const Base64String = canvasInfo.split( "data:image/png;base64," )[ 1 ];
    console.log( Base64String )

        //
        // function b64DecodeUnicode(str) {
        //   return decodeURIComponent(Array.prototype.map.call(atob(str), function(c) {
        //       return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)
        //   }).join(''))
        // }

    await fs.writeFile( path.join( __dirname, "/", "image.png" ), canvasInfo , function( error ) {
      if( error ) {
        throw error
      } else {
        console.log( "file created" )
        return true
      }

    })
  });
