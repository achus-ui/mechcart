import { MechcartPage } from './app.po';

describe('mechcart App', () => {
  let page: MechcartPage;

  beforeEach(() => {
    page = new MechcartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
