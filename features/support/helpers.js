import { ClientFunction } from "testcafe";

export const refreshPage = ClientFunction(( ) => {
  location.reload( );
});
