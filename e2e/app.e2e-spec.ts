import { AlmundoFrontendPage } from './app.po';

describe('almundo-frontend App', () => {
  let page: AlmundoFrontendPage;

  beforeEach(() => {
    page = new AlmundoFrontendPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
