import { Selector, ClientFunction } from "testcafe";


export default class Page {
  constructor ( ) {

    this.baseUrl = "http://the-internet.herokuapp.com/";

  }

  async getUrl( ) {
    const getWindowLocation = ClientFunction(() => window.location );
    let location = await getWindowLocation();
    return location.href;
  }


};
