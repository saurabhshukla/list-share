import { ListSharePage } from './app.po';

describe('list-share App', () => {
  let page: ListSharePage;

  beforeEach(() => {
    page = new ListSharePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
