import { Com.RumanPage } from './app.po';

describe('com.ruman App', () => {
  let page: Com.RumanPage;

  beforeEach(() => {
    page = new Com.RumanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
