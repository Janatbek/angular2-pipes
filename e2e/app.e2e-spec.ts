import { ComponentAndPipesPage } from './app.po';

describe('component-and-pipes App', () => {
  let page: ComponentAndPipesPage;

  beforeEach(() => {
    page = new ComponentAndPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
