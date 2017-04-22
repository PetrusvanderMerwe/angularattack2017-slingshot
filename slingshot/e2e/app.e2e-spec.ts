import { SlingshotPage } from './app.po';

describe('slingshot App', () => {
  let page: SlingshotPage;

  beforeEach(() => {
    page = new SlingshotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
