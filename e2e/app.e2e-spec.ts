import { HeroloPage } from './app.po';

describe('herolo App', () => {
  let page: HeroloPage;

  beforeEach(() => {
    page = new HeroloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
