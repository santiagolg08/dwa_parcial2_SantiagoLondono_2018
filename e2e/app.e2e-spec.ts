import { MarvelComicsPage } from './app.po';

describe('marvel-comics App', function() {
  let page: MarvelComicsPage;

  beforeEach(() => {
    page = new MarvelComicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
