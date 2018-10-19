import { Selector } from "testcafe";
import Page from "../../support/page-model";


export const notificationPage = new Page( );

notificationPage.path = "/notification_message_rendered";
notificationPage.button = Selector( "a" ).withText( "Click here" );
notificationPage.notification = Selector( "#flash" );
notificationPage.closeMessage = Selector( ".close" );
