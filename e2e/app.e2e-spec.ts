import { BestBattleshipPage } from './app.po';

describe('best-battleship App', () => {
  let page: BestBattleshipPage;

  beforeEach(() => {
    page = new BestBattleshipPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('bb works!');
  });
});
