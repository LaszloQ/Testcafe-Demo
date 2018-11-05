import { ClientFunction, Selector } from 'testcafe';


export const refresh = ClientFunction( ( ) => {
  location.reload( );
});


export const navigateBack = ClientFunction( ( ) => {
  window.history.back( );
});


export const navigateForward = ClientFunction( ( ) => {
  window.history.forward( );
});
